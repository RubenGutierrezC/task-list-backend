import { Router } from "express";
import { userModel } from "./models/userModel.mjs";
import { generateJWT } from "./utils/jwt.mjs";

const router = Router();

// auth
router.post("/login", async (req, res) => {
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
    console.log(error);
    res.status(500).json({
      error: "SERVER_ERROR",
    });
  }
});

router.post("/register", async (req, res) => {
  try {
    const { name, lastName, email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (user) {
      return res.status(404).json({
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

// task
router.get("/task", (req, res) => {});

router.post("/task", (req, res) => {});

router.put("/task/:id", () => {});

router.delete("/task/:id", () => {});

export default router;
