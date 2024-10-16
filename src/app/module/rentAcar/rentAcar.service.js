import RentAcar from "./renterAcar.model.js"


const insertRentAcar = async (data)=>{

    const result = await RentAcar.create(data)

    return result
}

const getAllRentacar = async (query)=>{

    const result = await RentAcar.find(query)

    return result
}



const rentAcarService = {

    insertRentAcar,
    getAllRentacar
}

export default rentAcarService