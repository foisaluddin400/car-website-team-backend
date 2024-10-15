import express from "express";
import carsRouter from "./app/module/cars.route.js";
import cors from 'cors';
import serviceRoutes from "./app/module/service/service.route.js";
import driverRoutes from "./app/module/driver/driver.route.js";
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
app.get('/', (req, res) => {
  res.send("Server is running");
});
