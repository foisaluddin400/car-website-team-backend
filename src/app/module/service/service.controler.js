import ServicesServive from "./service.service.js"

const insertService = async(req,res,next)=>{

    try {
        const result = await ServicesServive.insertService(req.body)

        res.status(200).json({
            success : true,
            message : "insert service succecfully",
            data : result

        })
        
    } catch (error) {
        next(error)
        
    }
}

// getall

const getAllService = async(req,res,next)=>{

    try {
        const result = await ServicesServive.getAllService()

        res.status(200).json({
            success : true,
            message : " get all service succecfully",
            data : result

        })
        
    } catch (error) {
        next(error)
        
    }
}


// getSingle

const getSingleservice = async(req,res,next)=>{

    try {
        const result = await ServicesServive.getSingleservice(req.params.id)

        res.status(200).json({
            success : true,
            message : " get single service succecfully",
            data : result

        })
        
    } catch (error) {
        next(error)
        
    }
}

// updateService

const updatesignleservice = async(req,res,next)=>{

    try {
        const result = await ServicesServive.updatesignleservice(req.params.id , req.body)

        res.status(200).json({
            success : true,
            message : " update single service succecfully",
            data : result

        })
        
    } catch (error) {
        next(error)
        
    }
}

// deltesignle service 

const deleteSignleService = async(req,res,next)=>{

    try {
        const result = await ServicesServive.deleteSignleService(req.params.id)

        res.status(200).json({
            success : true,
            message : " delete  single service succecfully",
            data : result

        })
        
    } catch (error) {
        next(error)
        
    }
}







const servicecontroler = {

    insertService,
    getAllService,
    getSingleservice,
    updatesignleservice,
    deleteSignleService
}

export default servicecontroler;