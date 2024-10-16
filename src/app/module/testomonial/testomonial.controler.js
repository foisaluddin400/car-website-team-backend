import testomonialService from "./testomonial.service.js"


const insertTestomonial = async(req,res,next)=>{

    try {

        const result = await testomonialService.insertTestomonial(req.body)

        res.status(200).json({
            success : true ,
            message : "insert testo succssfully",
            data: result
        })
        
    } catch (error) {
        next(error)
    }
}

// get


const getalltestomonial = async(req,res,next)=>{

    try {

        const result = await testomonialService.getalltestomonial()

        res.status(200).json({
            success : true ,
            message : " get all testo succssfully",
            data: result
        })
        
    } catch (error) {
        next(error)
    }
}

const deletetestomonial = async(req,res,next)=>{

    try {

        const result = await testomonialService.deletetestomonial(req.params.id)

        res.status(200).json({
            success : true ,
            message : " delete  testo succssfully",
            data: result
        })
        
    } catch (error) {
        next(error)
    }
}





const testomonialControler ={
    insertTestomonial,
    getalltestomonial,
    deletetestomonial
}

export default testomonialControler