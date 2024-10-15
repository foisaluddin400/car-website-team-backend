import express from 'express';
import carsController from './cars.controller.js';


const carsRouter = express.Router();

carsRouter.post("/cars", carsController.createCars);       // Create cars
carsRouter.get("/cars", carsController.getAllCars);        // Get all cars
carsRouter.get("/cars/:id", carsController.getSingleCars);  // Get single cars by ID
carsRouter.put("/cars/:id", carsController.updateCarsById); // Update cars by ID
carsRouter.delete("/cars/:id", carsController.deleteCarsById); // Delete cars by ID

export default carsRouter;
