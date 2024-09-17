

// const handler = ()=> async(req,res,next)=>{
//     try{
//         await fn(req,res,next);
//     }
//     catch(err){
//      res.status(err.code || 500).json({
//         success: false,
//         message: err.message,
//         stack: err.stack,
//      });
//     }
// }
const asyncHandler = (handler)=>{
    return async(req,res,next)=>{
        Promise.resolve(handler(req,res,next)).catch(next)
    }   
}
export default {asyncHandler};