

const handledError = (err, req , res, next ) => {
     res.status(500).json({
        message: "Internal Server Error",
        success:false,
        error: err,
        stack:err.stack || "No stack trace available"
    })
}

const notFoundUrlError = (req , res, next) => {
    res.status(404).json({
      message:"Requested URL was not found",
      success:false,
      status:404,
      url: req.url
    })
  }

export const GlobalError = {
    handledError,
    notFoundUrlError
};