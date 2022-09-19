const router = require('express').Router()
const uploadfile = require('./uploadfileRoute')

router.use('/uploadfile', uploadfile)


module.exports = router