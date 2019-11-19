import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

export const TaskSchema = new Schema({
  title: {
    type: String,
    required: "Enter a Title"
  },
  description: {
    type: String,
    required: "Enter a description"
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});
