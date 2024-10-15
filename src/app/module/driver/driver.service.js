import Drivers from "./driver.model.js"

// insert driver 
const insertDriver = async(data)=>{

    const result = await Drivers.create(data)
    return result
};

// Get a single 
const getSingledriver = async (id) => {
    const result = await Drivers.findById(id);
    return result;
  };

  // Get a all 
const getAlldriver = async () => {
    const result = await Drivers.find();
    return result;
  };

// update single
const updateSingledriver = async (id,data) => {
    const result = await Drivers.findByIdAndUpdate(id,data,{new:true});
    return result;
  };

//   delete 
const delteDriver = async (id) => {
    const result = await Drivers.findByIdAndDelete(id);
    return result;
  };








const driverService = {

    insertDriver,
    getSingledriver,
    getAlldriver,
    updateSingledriver,
    delteDriver

}

export default driverService