import Service from "./service.model.js"

// insert service
const insertService = async(data)=>{

    const result = await Service.create(data)
    return result;
}

// getAllservice 

const getAllService = async()=>{

    const result = await Service.find()

    return result
}

// getSingle 

const getSingleservice = async(id)=>{

    const result = await Service.findById(id)
    return result
}

// updatesingle 

const updatesignleservice = async(id,data)=>{

    const result = await Service.findByIdAndUpdate(id,data, {new:true})

    return result


}

// deletesingle service 

const deleteSignleService = async(id)=>{

    const result = await Service.findByIdAndDelete({_id : id})
    return result
}

const ServicesServive = {

    insertService,
    getAllService,
    getSingleservice,
    updatesignleservice,
    deleteSignleService
}

export default ServicesServive