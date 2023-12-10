import mongoose from 'mongoose';
import { userSchema } from '../Models/models.js';

const usersData = mongoose.model('user-data', userSchema);

export const getUserList = async (req, res) => {
    try {
        const usersList = await usersData.find();
        if (!usersList) {
            res.status(404).json({ message: "user not found!" })
        }
        // res.json(`getting data`)
        res.json(usersList)
    } catch (err) {
        res.status(500).send(err)
    }
}

export const addNewUser = async (req, res) => {
    try {
        let newUser = new usersData(req.body);
        const savedUser = await newUser.save();
        res.json(savedUser);
    } catch (err) {
        res.status(500).send(err)
    }
}