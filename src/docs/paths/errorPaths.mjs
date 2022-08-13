export const errorResponses = {
  400: {
    description: "Mensaje error", // response desc.
    content: {
      // content-type
      "application/json": {
        schema: {
          $ref: "#/components/schemas/Error4XX",
        },
      },
    },
  },
  500: {
    description: "Mensaje error", // response desc.
    content: {
      // content-type
      "application/json": {
        schema: {
          $ref: "#/components/schemas/Error5XX",
        },
      },
    },
  },
};
