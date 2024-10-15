import { model, Schema } from "mongoose";

const carsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  date: {
    type: Number,
    required: true,
  },
 
  img: {
    type: String,
    require:true,
  },
  description: {
    type: String,
    require:true,
  },
  description_title: {
    type: String,
    require:true,
  },
}, 
{
  timestamps: true,
});

const Blog = model("Blog", carsSchema);
export default Blog;
