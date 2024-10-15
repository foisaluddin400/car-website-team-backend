import express from 'express';
import driverControler from './driver.controler.js';

const routes = express.Router();




routes.post("/driver", driverControler.insertDriver) 

routes.get("/driver/:id", driverControler.getSingledriver) 

routes.get("/driver", driverControler.getAlldriver) 

routes.patch("/driver/:id", driverControler.updateSingledriver)

routes.delete("/driver/:id", driverControler.delteDriver)





const driverRoutes = routes

export default driverRoutes