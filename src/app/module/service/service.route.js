import express from 'express';
import servicecontroler from './service.controler.js';

const routes = express.Router();

routes.post("/service",servicecontroler.insertService)

routes.get("/service",servicecontroler.getAllService)

routes.get("/service/:id",servicecontroler.getSingleservice)

routes.patch("/service/:id",servicecontroler.updatesignleservice)

routes.delete("/service/:id",servicecontroler.deleteSignleService)



const serviceRoutes = routes

export default serviceRoutes