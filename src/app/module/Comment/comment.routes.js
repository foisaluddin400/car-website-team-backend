import express from 'express';
import commentController from './comment.controller.js';

const routes = express.Router();


routes.post ("/comment",commentController.insertComment)
routes.get ("/comment",commentController.getComment)


const commentRoutes = routes

export default commentRoutes