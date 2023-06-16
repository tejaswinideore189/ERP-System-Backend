const express = require('express')
const router = express.Router()
const detailController = require('../controller/logincontroller')

router.post('/user', detailController.userDetails)

router.post('/admin', detailController.adminDetails)

module.exports = router