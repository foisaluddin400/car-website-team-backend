import { model, Schema } from "mongoose";

const carsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  aircondition: {
    type: String,
    required: true,
  },
  passengers: {
    type: Number,
    required: true,
  },
  doors: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  
  description_title: {
    type: String,
    required: true,
  },
  img_gallery: {
    type: [String],
    required: true,
  },
  car_Features: {
    type: [String],
    required: true,
  },
  
}, 


{
  timestamps: true,
});

const Cars = model("Cars", carsSchema);
export default Cars;
