import express from 'express';
import userController from './user.controller.js';


// ei file router banacci

const userRouter = express.Router();

userRouter.post("/users", userController.inserUserIntoDB)

userRouter.post("/users/login", userController.loginUser)

userRouter.get("/users/:id", userController.getSingleUser)
userRouter.put("/users/:id", userController.updateUserById)
userRouter.get("/users", userController.getAllUser)

export default userRouter;