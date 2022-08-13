const components = {
  // error model
  schemas: {
    Task: {
      type: "object",
      properties: {
        _id: {
          type: "string",
          example: "62f256783fbf1b60c03e5cc8",
        },
        name: {
          type: "string",
          example: "test",
        },
        date: {
          type: "string",
          example: "10/10/2022",
        },
        priority: {
          type: "number",
          example: 6,
        },
        userId: {
          type: "string",
          example: "62f1bad2fc20061f65e925d9",
        },
      },
    },

    Error4XX: {
      type: "object", //data type
      properties: {
        error: {
          type: "string", // data type
          description: "Error message", // desc
          example: "Mensaje de error", // example of an error message
        },
      },
    },

    Error5XX: {
      type: "object", //data type
      properties: {
        error: {
          type: "string", // data type
          description: "Error message", // desc
          example: "SERVER_ERROR", // example of an error message
        },
      },
    },
  },
};

export default components;
