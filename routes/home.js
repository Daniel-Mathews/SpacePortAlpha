//constants 
const express = require('express');
const router = express.Router()
//calling homecontroller from controller
const homecontroller =  require('./../controllers/homecontroller')
console.log("msnsdgubkuytddvsyh")

router.route("/").get(homecontroller.getcontrol)
router.route("/about").get(homecontroller.getaboutcontrol)

module.exports=router
