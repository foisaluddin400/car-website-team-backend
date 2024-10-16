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



const bookrentelControler = {

    insertBookRentel,
    getBookRentel
}

export default bookrentelControler