import { Router } from "express";
import {
  loginValidations,
  registerValidations,
} from "./middleware/authMiddlewares.mjs";
import { createTaskValidations } from "./middleware/taskMiddlewares.mjs";
import { taskModel } from "./models/taskModel.mjs";
import { userModel } from "./models/userModel.mjs";
import { generateJWT, verifyToken } from "./utils/jwt.mjs";

const router = Router();

// auth
router.post("/login", loginValidations, async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email, password });

    if (!user) {
      return res.status(404).json({
        error: "Correo o contraseña incorrecta",
      });
    }

    const token = generateJWT(user);

    res.json({
      message: "ok",
      token,
    });
  } catch (error) {
    res.status(500).json({
      error: "SERVER_ERROR",
    });
  }
});

router.post("/register", registerValidations, async (req, res) => {
  try {
    const { name, lastName, email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (user) {
      return res.status(400).json({
        error: "El correo ya está registrado",
      });
    }

    const newUser = await userModel.create({ name, lastName, email, password });
    await newUser.save();

    res.json({
      message: "Usuario creado con éxito",
    });
  } catch (error) {
    res.status(500).json({
      error: "SERVER_ERROR",
    });
  }
});

router.delete("/delete/:email", async (req, res) => {
  try {
    const { email } = req.params;

    const user = await userModel.findOneAndDelete({ email });

    res.json({
      message: "Usuario eliminado",
      deleted: Boolean(user),
    });
  } catch (error) {
    res.status(500).json({
      error: "SERVER_ERROR",
    });
  }
});

// task
router.get("/task", verifyToken, async (req, res) => {
  try {
    const { userId } = req.body;

    const task = await taskModel.find({ userId });

    res.json({
      message: "ok",
      data: task,
    });
  } catch (error) {
    res.status(500).json({
      error: "SERVER_ERROR",
    });
  }
});

router.post("/task", verifyToken, createTaskValidations, async (req, res) => {
  try {
    const { name, date, priority, userId } = req.body;

    const task = await taskModel.create({ name, date, priority, userId });
    const newTask = await task.save();

    res.json({
      message: "ok",
      data: newTask,
    });
  } catch (error) {
    res.status(500).json({
      error: "SERVER_ERROR",
    });
  }
});

router.put("/task/:id", verifyToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { name, date, priority } = req.body;

    const task = await taskModel.findOneAndDelete({ _id: id });

    if (!task) {
      return res.status(404).json({
        error: "La tarea no existe",
      });
    }

    const modifiedTask = await taskModel.findByIdAndUpdate(id, {
      name,
      date,
      priority,
    });

    res.json({
      message: "ok",
      data: modifiedTask,
    });
  } catch (error) {
    res.status(500).json({
      error: "SERVER_ERROR",
    });
  }
});

router.delete("/task/:id", verifyToken, async (req, res) => {
  try {
    const { id } = req.params;

    const task = await taskModel.findOneAndDelete({ _id: id });

    if (!task) {
      return res.status(404).json({
        error: "La tarea no existe",
      });
    }

    res.json({
      message: "ok",
    });
  } catch (error) {
    res.status(500).json({
      error: "SERVER_ERROR",
    });
  }
});

router.delete("/task/delete/all", verifyToken, async (req, res) => {
  try {
    const { userId } = req.body;

    const task = await taskModel.deleteMany({ userId });

    if (task.deletedCount === 0) {
      return res.status(404).json({
        error: "No hay tareas para eliminar",
      });
    }

    res.json({
      message: "ok",
    });
  } catch (error) {
    res.status(500).json({
      error: "SERVER_ERROR",
    });
  }
});

export default router;
