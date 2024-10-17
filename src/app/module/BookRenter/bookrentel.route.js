
import express from 'express';
import bookrentelControler from './bookrentel.controller.js';
const routes = express.Router();


routes . post("/bookrentel",bookrentelControler.insertBookRentel)

routes . get("/bookrentel",bookrentelControler.getBookRentel)

routes.get("/bookrentel/email", bookrentelControler.getBookbyemail);



const bookrentelRoutes =  routes

export default bookrentelRoutes