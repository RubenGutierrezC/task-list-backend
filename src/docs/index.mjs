import components from "./components.mjs";
import { post } from "./paths/loginPath.mjs";
import { register } from "./paths/registerPath.mjs";

const docs = {
  openapi: "3.0.3", // present supported openapi version
  info: {
    title: "Simple Todos API", // short title.
    description: "A simple todos API", //  desc.
    version: "1.0.0", // version number
    contact: {
      name: "Rubén Gutiérrez", // your name
      email: "rubdeivis@gmail.com.com", // your email
    },
  },
  components,
  paths: {
    "/login": {
      post,
    },
    "/register": {
      post: register,
    },
    "/task": {
      get: {},
      post: {},
    },
    "/task/:id": {
      put: {},
      delete: {},
    },
    "/task/delete/all": {
      delete: {},
    },
  },
};

export default docs;
