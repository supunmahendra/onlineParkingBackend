const Slots = require("../models/parkingmodel");
const mongoose = require("mongoose");






//get all slots
const getAllSlot = async (req, res) => {
    try {
        const allUser = await Slots.find({}).sort({ spotNo: 1 });
        res.status(200).json(allUser);
    } catch (error) {
        res.status(400).json({ massage: error.message });
    }
};


//creat slot
const createSlot = async (req, res) => {
    const {spotNo, reservedBy, dateFrom, dateTo} = req.body;
    try {
        const newSlot = await Slots.create({spotNo, reservedBy, dateFrom, dateTo});
        res.status(201).json({ message: "Registration Slot successful"});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//delete single slot
const deleteSlot = async (req, res) => {
    const { id } = req.params;

    try {
        const delSlot = await Slots.findByIdAndDelete(id);
        if (!delSlot) {
            return res.status(404).json({ massage: error.message });
        }
        res.status(200).json(delSlot);
    } catch (error) {
        res.status(400).json({ massage: error.message });
    }
};

//update slot

const updateSlot = async (req,res)=>{
    const {reservedBy, dateFrom, dateTo} =req.body
    const { id } = req.params;

    try {
        const updateSlot = await Slots.findByIdAndUpdate(id, {reservedBy, dateFrom, dateTo}, );
        if (!updateSlot) {
            return res.status(404).json({ massage: error.message });
        }
        res.status(200).json(updateSlot);
    } catch (error) {
        res.status(400).json({ massage: error.message });
    }

};

module.exports = {
    getAllSlot,
    createSlot,
    deleteSlot,
    updateSlot
};