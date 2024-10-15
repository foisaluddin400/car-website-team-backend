import driverService from "./driver.service.js"


const insertDriver = async(req,res,next)=>{


    try {
        const result = await driverService.insertDriver(req.body);
        res.status(200).json({
            success: true,
            message: "Drivers insert  successfully",
            data: result,
          });
        
    } catch (error) {

        next(error)
        
    }
}

// get single  

const getSingledriver = async(req,res,next)=>{
 
    try { 

        const result = await driverService.getSingledriver(req.params.id);
        res.status(200).json({
            success: true,
            message: "Drivers get  successfully",
            data: result,
          });
        
    } catch (error) {

        next(error)
        
    }
}

// get all

const getAlldriver = async(req,res,next)=>{
 
    try { 

        const result = await driverService.getAlldriver();
        res.status(200).json({
            success: true,
            message: " all Drivers get  successfully",
            data: result,
          });
        
    } catch (error) {

        next(error)
        
    }
}

// updateall 

const updateSingledriver = async(req,res,next)=>{
 
    try { 

        const result = await driverService.updateSingledriver(req.params.id,req.body);
        res.status(200).json({
            success: true,
            message: "  update driver  successfully",
            data: result,
          });
        
    } catch (error) {

        next(error)
        
    }
}
// delte

const delteDriver = async(req,res,next)=>{
 
    try { 

        const result = await driverService.delteDriver(req.params.id);
        res.status(200).json({
            success: true,
            message: "Drivers delete successfully",
            data: result,
          });
        
    } catch (error) {

        next(error)
        
    }
}






const driverControler = {

    insertDriver,
    getSingledriver,
    getAlldriver,
    updateSingledriver,
    delteDriver
}

export default driverControler