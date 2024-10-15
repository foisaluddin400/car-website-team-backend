import Cars from "./cars.model.js";


// Create a new car
const createCars = async (data) => {
  const result = await Cars.create(data);
  return result;
};

// Get a single car by ID
const getSingleCars = async (id) => {
  const result = await Cars.findById(id);
  return result;
};

// Update car by ID
const updateCarsById = async (id, data) => {
  const result = await Cars.findByIdAndUpdate(id, data, { new: true });
  return result;
};

// Get all cars
const getAllCars = async () => {
  const result = await Cars.find({});
  return result;
};

// Delete car by ID
const deleteCarsById = async (id) => {
  await Cars.findByIdAndDelete(id);
};

const carsServices = {
  createCars,
  getSingleCars,
  updateCarsById,
  getAllCars,
  deleteCarsById,
};

export default carsServices;
