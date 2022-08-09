import { handleErrorResponse } from "../utils/handleResponses.mjs";

export const loginValidations = (req, res, next) => {
    try {

        const { email, password } = req.body;

        if (!email) {
            return handleErrorResponse(res, "Debe enviar un correo")
        }

        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return handleErrorResponse(res, "El correo es invalido")
        }

        if (!password) {
            return handleErrorResponse(res, "Debe enviar una contraseña")
        }

        next()
    } catch (error) {
        res.status(500).json({
            error: "SERVER_ERROR",
        });
    }
}

export const registerValidations = (req, res, next) => {
    try {

        const { name, lastName, email, password } = req.body;

        if (!email) {
            return handleErrorResponse(res, "Debe enviar un correo")
        }

        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return handleErrorResponse(res, "El correo es invalido")
        }

        if (!name) {
            return handleErrorResponse(res, "Debe enviar un nombre")
        }

        if (!lastName) {
            return handleErrorResponse(res, "Debe enviar un apellido")
        }

        if (!password) {
            return handleErrorResponse(res, "Debe enviar una contraseña")
        }

        next()
    } catch (error) {
        res.status(500).json({
            error: "SERVER_ERROR",
        });
    }
}