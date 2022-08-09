export const handleErrorResponse = (res, msg = "", code = 400) => {
    return res?.status(code).json({
        error: msg,
    });
}