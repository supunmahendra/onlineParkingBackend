const express =require('express');
const router =express.Router()


const {getAllSlot, createSlot, deleteSlot, updateSlot} =require("../Controll/parkingcontroll")

//getAll
router.get('/', getAllSlot)

//post register
router.post('/register', createSlot)

//delete
router.delete('/:id', deleteSlot)

//patch
router.patch('/:id', updateSlot)


module.exports = router