import express from "express";
import carsRouter from "./app/module/cars.route.js";
import cors from 'cors';
import BlogRouter from "./app/module/blog/blog.route.js";
import userRouter from "./app/module/user/user.route.js";
 // Update the path accordingly

export const app = express();

const errorHandler = (err, req, res, next) => {
  console.log(err);
  res.status(err?.status || 500).json({
    success: false,
    message: err?.message || "Something is wrong",
  });
  next();
};

app.use(express.json());
app.use(errorHandler);
app.use(cors());
app.use(carsRouter); 
app.use(BlogRouter);
app.use(userRouter)
app.get('/', (req, res) => {
  res.send("Server is running");
});
