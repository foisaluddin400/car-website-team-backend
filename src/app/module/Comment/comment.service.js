import Comment from "./comment.model.js"


const insertComment = async (data)=>{

    const result = await Comment.create(data);

    return result
}

const getComment = async (query)=>{

    const result = await Comment.find(query);

    return result
}





const commentService = {
    insertComment,
    getComment 
}

export default commentService