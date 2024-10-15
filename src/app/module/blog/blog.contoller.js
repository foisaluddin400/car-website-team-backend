import BlogServices from "./blog.service.js";




// Create cars controller
const createBlog = async (req, res, next) => {
  try {
    const result = await BlogServices.createBlog(req.body);
    res.status(201).json({
      success: true,
      message: "Cars created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// Get all cars controller
const getAllBlog = async (req, res, next) => {
  try {
    const result = await BlogServices.getAllBlog();
    res.status(200).json({
      success: true,
      message: "All cars retrieved successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// Get single car controller
const getSingleBlog = async (req, res, next) => {
  try {
    const result = await BlogServices.getSingleBlog(req.params.id);
    res.status(200).json({
      success: true,
      message: "Cars retrieved successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// Update cars controller
const updateBlogById = async (req, res, next) => {
  try {
    const result = await BlogServices.updateBlogById(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: "Cars updated successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// Delete cars controller
const deleteBlogById = async (req, res, next) => {
  try {
    await BlogServices.deleteBlogById(req.params.id);
    res.status(200).json({
      success: true,
      message: "Cars deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

const BlogController = {
  createBlog,
  getAllBlog,
  getSingleBlog,
  updateBlogById,
  deleteBlogById,
};

export default BlogController;
