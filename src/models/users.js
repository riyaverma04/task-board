import mongoose, { Schema } from "mongoose";


const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required"],
    
  },
  password: {
    type: String,
    required: [true, "Email is required"],
  }
})






//creating a model

export const User =mongoose.models.user || mongoose.model('user',userSchema )

