import mongoose, { Schema } from "mongoose";

const workSchema = new Schema({
    title:{
      type: String,
      required:true
    },
    content: {
      type: String,
      required:true
    },
   
    date: {
      type:Date,
     
    },
    status:{
      type: String,
      
      enm: ["pending","completed","added Now"],
      
    },
    userid:{
      type: mongoose.ObjectId,
      required:true
    }
  })
  
  
  
  export const Work =mongoose.models.work || mongoose.model('work',workSchema )