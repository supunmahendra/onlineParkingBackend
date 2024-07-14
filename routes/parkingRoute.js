const express = require('express');
const passport = require('passport')
const checkRoles = require('../middleware/checkRole');

const router = express.Router()


const { getAllSlot, createSlot, deleteSlot, updateSlot } = require("../Controll/parkingcontroll")

//getAll
router.get('/', passport.authenticate("jwt", { session: false }), getAllSlot)

//post register
router.post('/register', passport.authenticate("jwt", { session: false }), checkRoles(["admin"]), createSlot)

//delete
router.delete('/:id', passport.authenticate("jwt", { session: false }), checkRoles(["admin"]), deleteSlot)

//patch
router.patch('/:id', passport.authenticate("jwt", { session: false }), updateSlot)


module.exports = router