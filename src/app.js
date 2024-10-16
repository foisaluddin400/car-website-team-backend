import express from "express";
import carsRouter from "./app/module/cars.route.js";
import cors from 'cors';
import serviceRoutes from "./app/module/service/service.route.js";
import driverRoutes from "./app/module/driver/driver.route.js";
import BlogRouter from "./app/module/blog/blog.route.js";
import userRouter from "./app/module/user/user.route.js";
import testomonialRoutes from "./app/module/testomonial/testomonial.route.js";
import rentAcarRoutes from "./app/module/rentAcar/rentAcar.route.js";
import bookrentelRoutes from "./app/module/BookRenter/bookrentel.route.js";
import commentRoutes from "./app/module/Comment/comment.routes.js";


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
app.use(carsRouter); // Use carsRouter for /api
app.use(serviceRoutes); // Use carsRouter for /api
app.use(driverRoutes); // Use carsRouter for /api
app.use(carsRouter); 
app.use(BlogRouter);
app.use(userRouter)
app.use(testomonialRoutes)
app.use(rentAcarRoutes)
app.use(bookrentelRoutes)
app.use(commentRoutes)

app.get('/', (req, res) => {
  res.send("Server is running");
});
