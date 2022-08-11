export const register = {
  tags: ["Auth APIs"], // operation's tag.
  description: "API para registrar usuario", // operation's desc.
  requestBody: {
    // expected request body
    content: {
      // content-type
      "application/json": {
        schema: {
          type: "object",
          properties: {
            name: {
              type: "string",
              example: "prueba",
            },
            lastName: {
              type: "string",
              example: "probencio",
            },
            email: {
              type: "string",
              example: "prueba@gmail.com",
            },
            password: {
              type: "string",
              example: "12345",
            },
          },
        },
      },
    },
  },
  // expected responses
  responses: {
    // response code
    200: {
      description: "Respuesta exitosa", // response desc.
      content: {
        // content-type
        "application/json": {
          schema: {
            type: "object",
            properties: {
              message: {
                type: "string",
                example: "Usuario creado con éxito",
              },
            },
          },
        },
      },
    },
  },
};
