const User = require("../models/usermodel");
const mongoose = require("mongoose");
const bcrypt =require('bcryptjs');
const jwt =require ('jsonwebtoken');

require('dotenv').config();

//creat user
const createUser = async (req, res) => {
    const { firstName, familyName, username, password, email, roles } = req.body;

    try {
        if (!password) throw new Error("Password is required");
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({firstName, familyName, password: hashedPassword, username, email, roles });
        res.status(201).json({ message: "Registration successful" });
    } catch (error) {
        console.error("Registration error: ", error.message);
        res.status(400).json({ message: error.message });
    }
};


//login
const login =async(req,res)=>{
    const { username, password } = req.body;
    console.log(req.body);

    try{
        if(!password||!username) throw new error ("password and username is required")
        const user = await User.findOne({username});
        if(!user) return res.status(400).json({message:"Credentials Invalid"})

        const isMatch =await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({massage:"Credentials Invalid"})
        
        if(!process.env.JWT_SECRET) throw new Error ('JWT secrert is not defined');

        const token =jwt.sign({
            id:user._id, username:user.username
        },process.env.JWT_SECRET, 
        {expiresIn:"1h"}
    )
    res.json({token});
    }catch (error){
        console.error("Login error: ", error.message);
        res.status(400).json({ message: error.message });
    }
} 



//get all user
const getAllUser = async (req, res) => {
    try {
        const allUser = await User.find({}).sort({ createdAt: -1 });
        res.status(200).json(allUser);
    } catch (error) {
        res.status(400).json({ massage: error.message });
    }
};

//get single user
const getUser = async (req, res) => {
    const { firstName, familyName, username, password, email, roles } = req.body;

    try {
        const singleUser = await User.findById(id);
        res.status(200).json(singleUser);
    } catch (error) {
        res.status(400).json({ massage: error.message });
    }
};

//delete single user
const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        const deleteUser = await User.findByIdAndDelete(id);
        if (!deleteUser) {
            return res.status(404).json({ massage: error.message });
        }
        res.status(200).json(deleteUser);
    } catch (error) {
        res.status(400).json({ massage: error.message });
    }
};

//opdate single user https://mongoosejs.com/docs/api/model.html

module.exports = {
    createUser,
    getAllUser,
    getUser,
    deleteUser,
    login,
};
