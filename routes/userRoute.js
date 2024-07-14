const express = require('express');
const router = express.Router()
const passport = require('passport')
const checkRoles = require('../middleware/checkRole');

//const User = require('../models/usermodel')


//import mongoose, { Document } from 'mongoose';

const { createUser } = require("../Controll/usercontroller")
const { getAllUser } = require("../Controll/usercontroller")
const { getUser } = require("../Controll/usercontroller")
const { deleteUser } = require("../Controll/usercontroller")
const { login } = require("../Controll/usercontroller")

//get
router.get('/:id', getUser)

//login
router.post('/login', login)

//getAll
router.get('/', passport.authenticate("jwt", { session: false }), checkRoles(["admin"]), getAllUser)

//post register
router.post('/register', passport.authenticate("jwt", { session: false }), checkRoles(["admin"]), createUser)

//delete
router.delete('/:id', passport.authenticate("jwt", { session: false }), checkRoles(["admin"]), deleteUser)

//patch
//router.patch('/', (req,res)=>{
//    res.send({massage:"patch user"})
//})

module.exports = router;