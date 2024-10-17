import bookrentelService from "./bookrentel.service.js"

const insertBookRentel = async(req,res,next)=>{

    try {

        const result = await bookrentelService.insertBookRentel(req.body)
        res.status(200).json({
            success: true,
            message: "Book rentel successfully",
            data: result,
          });
    } catch (error) {
        next (error)
        
    }
}


const getBookRentel = async(req,res,next)=>{

    try {

        const result = await bookrentelService.getBookRentel(req.body)
        res.status(200).json({
            success: true,
            message: " get successfully",
            data: result,
          });
    } catch (error) {
        next (error)
        
    }
}

// get single

const getBookbyemail = async (req, res, next) => {
    try {
        
        const { email } = req.query; 

        
        const result = await bookrentelService.getBookbyemail(email);

        if (!result || result.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No bookings found for this email",
            });
        }

        res.status(200).json({
            success: true,
            message: "Get successfully",
            data: result,
        });
    } catch (error) {
        next(error);
    }
}



const bookrentelControler = {

    insertBookRentel,
    getBookRentel,
    getBookbyemail
}

export default bookrentelControler