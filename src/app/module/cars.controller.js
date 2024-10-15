import carsServices from "./cars.service.js";



// Create cars controller
const createCars = async (req, res, next) => {
  try {
    const result = await carsServices.createCars(req.body);
    res.status(200).json({
      success: true,
      message: "Cars created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// Get all cars controller
const getAllCars = async (req, res, next) => {
  try {
    const result = await carsServices.getAllCars();
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
const getSingleCars = async (req, res, next) => {
  try {
    const result = await carsServices.getSingleCars(req.params.id);
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
const updateCarsById = async (req, res, next) => {
  try {
    const result = await carsServices.updateCarsById(req.params.id, req.body);
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
const deleteCarsById = async (req, res, next) => {
  try {
    await carsServices.deleteCarsById(req.params.id);
    res.status(200).json({
      success: true,
      message: "Cars deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

const carsController = {
  createCars,
  getAllCars,
  getSingleCars,
  updateCarsById,
  deleteCarsById,
};

export default carsController;
