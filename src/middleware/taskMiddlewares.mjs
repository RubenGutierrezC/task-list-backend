import { handleErrorResponse } from "../utils/handleResponses.mjs";

export const createTaskValidations = (req, res, next) => {
    try {

        const { name, date, priority } = req.body;

        if (!name) {
            return handleErrorResponse(res, "Debe enviar un nombre")
        }

        if (!date) {
            return handleErrorResponse(res, "Debe enviar una fecha")
        }


        if (!date) {
            return handleErrorResponse(res, "Debe una prioridad")
        }

        const parsedPriority = parseInt(date)

        if (isNaN(parsedPriority)) {
            return handleErrorResponse(res, "La prioridad debe ser un numero")
        }

        next()

    } catch (error) {
        res.status(500).json({
            error: "SERVER_ERROR",
        });
    }
}