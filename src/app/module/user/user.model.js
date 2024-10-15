import { model, Schema } from "mongoose";

// 1st step


const userSchema = new Schema({
  name:{
    type:String,
    required:true
  },
  phoneNumber:{
    type:Number,
   
  },
  role:{
    type:String,
    enum:["admin", "customer"],
    default:"customer"
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true,
    
  },
  
},{
  timestamps:true
})


const User = model("User", userSchema)
export default User