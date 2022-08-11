const components = {
  // error model
  schemas: {
    Error: {
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
