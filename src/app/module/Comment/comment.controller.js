import commentService from "./comment.service.js"


const insertComment = async(req,res,next)=>{

    try {

        const result = await commentService.insertComment(req.body)
        res.status(200).json({
            success: true,
            message: "Comment  insert  successfully",
            data: result,
          });
        
    } catch (error) {
        next (error)
        
    }
}

const getComment  = async(req,res,next)=>{

    try {

        const result = await commentService.getComment (req.body)
        res.status(200).json({
            success: true,
            message: "Comment  get successfully",
            data: result,
          });
        
    } catch (error) {
        next (error)
        
    }
}


const commentController = {

    getComment ,
    insertComment
}


export default commentController
