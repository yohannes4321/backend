const express = require('express');
const router = express.Router();
 
const userSignInController = require('../signin');
const userSignUpController = require('../signup');

const userLogout = require('../userlogout');
const forgetpassword=require('../forgetpassword')
const resetPassword=require('../resetpassword')
 
// Define your routes
router.post('/signup', userSignUpController);
router.post('/signin', userSignInController);
router.get('/user_logout', userLogout);
router.post('/forget_password',forgetpassword)
router.post('/reset_password/:id/:token',resetPassword)
router

module.exports = router; // Export the router properly
