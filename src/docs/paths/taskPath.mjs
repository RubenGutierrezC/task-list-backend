import { errorResponses } from "./errorPaths.mjs";

export const getTasks = {
  tags: ["Task APIs"], // operation's tag.
  description: "API para consultar todas las tareas del usuario", // operation's desc.
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
                example: "ok ",
              },
              data: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/Task",
                },
              },
            },
          },
        },
      },
    },
    ...errorResponses,
  },
};

export const registerTask = {
  tags: ["Task APIs"], // operation's tag.
  description: "API para registrar una tarea", // operation's desc.
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
              example: "tarea prueba",
            },
            date: {
              type: "string",
              example: "10/10/2020",
            },
            priority: {
              type: "number",
              example: "5",
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
              data: {
                $ref: "#/components/schemas/Task",
              },
            },
          },
        },
      },
    },
    ...errorResponses,
  },
};

export const updateTask = {
  tags: ["Task APIs"], // operation's tag.
  description: "API para registrar una tarea", // operation's desc.
  parameters: [
    {
      name: "id", // name of the param
      in: "path", // location of the param
      schema: {
        id: {
          type: "string",
          example: "123",
        }, // data model of the param
      },
      required: true, // Mandatory param
      description: "Id de la tarea a eliminar", // param desc.
    },
  ], // expected params.
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
              example: "tarea prueba",
            },
            date: {
              type: "string",
              example: "10/10/2020",
            },
            priority: {
              type: "number",
              example: "5",
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
              data: {
                $ref: "#/components/schemas/Task",
              },
            },
          },
        },
      },
    },
    ...errorResponses,
  },
};

export const deleteOneTask = {
  tags: ["Task APIs"], // operation's tag.
  description: "API para borrar una tarea", // operation's desc.
  // expected responses
  parameters: [
    {
      name: "id", // name of the param
      in: "path", // location of the param
      schema: {
        id: {
          type: "string",
          example: "123",
        }, // data model of the param
      },
      required: true, // Mandatory param
      description: "Id de la tarea a eliminar", // param desc.
    },
  ], // expected params.
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
                example: "ok ",
              },
            },
          },
        },
      },
    },
    ...errorResponses,
  },
};

export const deleteAllTask = {
  tags: ["Task APIs"], // operation's tag.
  description: "API para borrar todas las tareas", // operation's desc.
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
                example: "ok ",
              },
            },
          },
        },
      },
    },
    ...errorResponses,
  },
};
