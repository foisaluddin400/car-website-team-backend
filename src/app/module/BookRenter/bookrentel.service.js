
import BookRentel from "./bookrentel.model.js"

const insertBookRentel = async(data)=>{

    const result = await BookRentel.create(data);
    return result

}

const getBookRentel = async(query)=>{

    const result = await BookRentel.find(query);
    return result

}





const bookrentelService = {

    insertBookRentel,
    getBookRentel
}

export default bookrentelService