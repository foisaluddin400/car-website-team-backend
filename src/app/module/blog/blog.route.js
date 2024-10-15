import express from 'express';
import BlogController from './blog.contoller.js';



const BlogRouter = express.Router();

BlogRouter.post("/blog", BlogController.createBlog);       // Create cars
BlogRouter.get("/blog", BlogController.getAllBlog);        // Get all cars
BlogRouter.get("/blog/:id", BlogController.getSingleBlog);  // Get single cars by ID
BlogRouter.put("/blog/:id", BlogController.updateBlogById); // Update cars by ID
BlogRouter.delete("/blog/:id", BlogController.deleteBlogById); // Delete cars by ID

export default BlogRouter;
