
import express from 'express';
import testomonialControler from './testomonial.controler.js';

const  routes = express.Router()


routes.post("/testomonial",testomonialControler.insertTestomonial)

routes.get("/testomonial",testomonialControler.getalltestomonial)

routes.delete("/testomonial/:id",testomonialControler.deletetestomonial)



const testomonialRoutes = routes;

export default testomonialRoutes