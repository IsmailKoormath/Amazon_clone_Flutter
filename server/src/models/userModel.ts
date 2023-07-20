import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: () => {
        const re =
          /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        //  return value.match(re);
      },
      message:'Please enter a valid email address',
    },
  },
    password: {
      type: String,
      required: true,
    },
    address:{
        tupe:String,
        default: '',
    },
    type:{
        type:String,
        default:'user',
    }
});

const User =mongoose.model("User", userSchema);

export default User;