import mongoose from "mongoose"

const todoSchema =  mongoose.Schema({
  task: {text: String},
});

export default mongoose.model("Todo", todoSchema);