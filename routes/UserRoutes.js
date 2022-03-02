const router = require('express').Router();
const beforeLogin=require("../controllers/beforelogin")
const afterlogin = require("../controllers/afterlogin")

router.post('/login',beforeLogin.login)
router.post('/registration',beforeLogin.registration) 
router.post('/sendOtp',beforeLogin.sendOtp)
router.post('/checkOtp',beforeLogin.checkOtp)
router.post('/resendOtp',beforeLogin.resendOtp)
router.post('/createArtical',afterlogin.createArtical)
router.post('/addCategory',afterlogin.addCategory)
router.post('/addTags',afterlogin.addTags)
router.get('/getCategory',afterlogin.getCategory)
router.get('/getTags',afterlogin.getTags)
module.exports = router 

