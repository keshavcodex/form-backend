import mongoose from "mongoose";

const formSchema = {
  _id: Number,
  userName: String,
  phone: Number,
  email: String,
  hobbies: String,
  lastUpdated: Date
};

const Form = mongoose.model("form", formSchema);

export default Form;
