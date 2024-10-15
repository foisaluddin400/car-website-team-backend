import Blog from "./blog.model.js";



const createBlog = async (data) => {
  const result = await Blog.create(data);
  return result;
};


const getSingleBlog = async (id) => {
  const result = await Blog.findById(id);
  return result;
};


const updateBlogById = async (id, data) => {
  const result = await Blog.findByIdAndUpdate(id, data, { new: true });
  return result;
};


const getAllBlog = async () => {
  const result = await Blog.find({});
  return result;
};


const deleteBlogById = async (id) => {
  await Cars.findByIdAndDelete(id);
};

const BlogServices = {
  createBlog,
  getSingleBlog,
  updateBlogById,
  getAllBlog,
  deleteBlogById,
};

export default BlogServices;
