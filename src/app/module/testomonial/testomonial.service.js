import Testominal from "./testomonial.model.js"


const insertTestomonial = async(data)=>{

    const result = await Testominal.create(data)

    return result
}

const getalltestomonial = async()=>{

    const result = await Testominal.find()

    return result
}

const deletetestomonial = async(id)=>{

    const result = await Testominal.findByIdAndDelete({_id:id})

    return result
}






const testomonialService = {

    insertTestomonial,
    getalltestomonial,
    deletetestomonial
}


export default testomonialService 