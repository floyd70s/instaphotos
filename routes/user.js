'use strict'

/**
 * @author CPerezD
 * @description aca se definen las rutas 
 */

var express= require('express')
var UserController=require('../controllers/user')
var api= express.Router();

api.post('/get-photos',UserController.instagramPhotos) 
module.exports=api
 