



//ei file collection banacci

import userServices from "./user.service.js";

const inserUserIntoDB = async (req, res,next)=>{
  try {
    const result = await userServices.inserUserIntoDB(req.body);
  res.status(200).json({
    success:true,
    message: "User create successfully",
    data:result
  });
  } catch (error) {
    next(error)
  }
}

const loginUser = async (req, res,next)=>{
  try {
    const result = await userServices.loginUser(req.body);
  res.status(200).json({
    success:true,
    message: "User logged successfully",
    data:result?.data,
    token: result?.token
  });
  } catch (error) {
    next(error)
  }
}



const getSingleUser = async (req, res,next)=>{
  try {
    const result = await userServices.getSingleUser(req.params.id);
  res.status(200).json({
    success:true,
    message: "User find successfully",
    data:result
  });
  } catch (error) {
    next(error)
  }
}

const updateUserById = async (req, res,next)=>{
  try {
    const result = await userServices.updateUserById(req.params.id, req.body);
  res.status(200).json({
    success:true,
    message: "User update successfully",
    data:result
  });
  } catch (error) {
    next(error)
  }
}

const getAllUser = async (req, res,next)=>{
  try {
    const result = await userServices.getAllUser();
  res.status(200).json({
    success:true,
    message: "All User Get successfully",
    data:result
  });
  } catch (error) {
    next(error)
  }
}

const userController ={
  inserUserIntoDB,
  getSingleUser,
  updateUserById,
  getAllUser,
  loginUser
}

export default userController