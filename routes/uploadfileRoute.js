const router = require('express').Router()
const multer = require('multer')
const uploadfileController = require('../controllers/uploadfileController')

// set storage
const storage = multer.diskStorage({
    //destino
    destination: function (req,file,cb) {
        cb(null,'uploads')
    },
    // identificador
    filename: function (req,file,cb){
        let filename = file.originalname.split('.')[0]
        let fileExtention = file.originalname.split('.')[1]
        cb(null, filename + '-' + Date.now()+ '.' + fileExtention)
    }
})
const upload = multer({storage: storage})

router.post('/', upload.single('myFile'),(req,res,next)=>{

    uploadfileController.upload(req,res,next)
})

module.exports = router