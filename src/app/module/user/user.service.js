

import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "./user.model.js"
// database create, delet, update er kaj gula kore pathacci

const inserUserIntoDB = async(data)=>{
  //password er man ta hash kore rakhteci jate database e pssword nah dekha jay
  const hasedData = {...data}
  const hasedPassword = await bcrypt.hash(hasedData.password,12)
  hasedData.password = hasedPassword
  
  const result = await User.create(hasedData)
  return result
}

const loginUser = async(data)=>{
  // check databse exist email
  const isUserExist = await User.findOne({email:data?.email})
  if(!isUserExist ){
throw new Error("User not Exist")
  }
  const isPasswordMatched = await bcrypt.compare(data?.password, isUserExist?.password)
  if(isPasswordMatched === false){
    throw new Error("Password did not matche")
  }

  //admin check jwt
  const userObject ={
    userId: isUserExist?._id,
    role:isUserExist?.role,
    emial: isUserExist?.email
  }
  const token = jwt.sign(userObject,"resturent223", {expiresIn:"1h"})
  console.log(token)
  return isUserExist
}





const getSingleUser = async(id)=>{
  const result = await User.findById(id);
  return result
}

const updateUserById = async (id, data)=>{
  const result = await User.findByIdAndUpdate(id, data,{new:true})
}

const getAllUser = async()=>{
  const result = await User.find({});
  return result;
};

const userServices = {
  inserUserIntoDB,
  getSingleUser,
  updateUserById,
  getAllUser,
  loginUser
}
export default userServices;