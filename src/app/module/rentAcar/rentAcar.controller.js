import rentAcarService from "./rentAcar.service.js"



const insertRentAcar = async(req,res,next)=>{


    try {
        const result = await rentAcarService.insertRentAcar(req.body);
        res.status(200).json({
            success: true,
            message: "  rentacar  insert  successfully",
            data: result,
          });
        
    } catch (error) {

        next( " data insert hocce nah",error)
        
    }
}

const getAllRentacar = async (req,res,next)=>{

    try {

        const result = await rentAcarService.getAllRentacar(req.body);
        res.status(200).json({
            success: true,
            message: " Rent a car get successfully",
            data: result,
          });
        
    } catch (error) {
        next(error)
        
    }
}





const rentAcarControlller = {

    insertRentAcar,
    getAllRentacar
}

export default rentAcarControlller
