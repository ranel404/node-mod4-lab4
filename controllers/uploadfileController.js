module.exports = {
    upload: function(req,res,next){
        const file = req.file
        console.log(file)
        if(!file){
            const error = new Error('Please upload a file')
            error.httpStatusCode = 400
            return next(error)
        }
        res.send(file) 
    }
}