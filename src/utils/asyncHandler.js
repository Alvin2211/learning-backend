const asyncHandler = (fn) =>aysnc (req ,res, next) =>{
    try {
        await fn(req, res, next);
    } catch (error) {
        res.status(error.code||500).json({
            success: false,
            message: error.message || "Internal Server Error",

        })
        
    }
}