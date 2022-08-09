import moongose from "mongoose";
const { Schema, model } = moongose;

const taskSchema = new Schema({
  name: String,
  date: String,
  priority: Number,
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export const taskModel = model("Task", taskSchema);
