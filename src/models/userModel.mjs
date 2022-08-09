import moongose from "mongoose";
const { Schema, model } = moongose;

const userSchema = new Schema({
  email: String,
  password: String,
  name: String,
  lastName: String,
});

export const userModel = model("User", userSchema);
