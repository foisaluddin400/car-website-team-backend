import express from 'express';
import rentAcarControlller from './rentAcar.controller.js';
const routes = express.Router();


routes.post ("/rentAcar",rentAcarControlller.insertRentAcar)

routes.get ("/rentAcar",rentAcarControlller.getAllRentacar)

const rentAcarRoutes = routes

export default rentAcarRoutes