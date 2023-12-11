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

export const updateSequence = async (req, res) => {
    try {
        const { updatedList } = req.body;

        // Update the sequence in the database based on the received list
        await Promise.all(
            updatedList.map(async (user, index) => {
                await usersData.updateOne({ _id: user._id }, { sequence: index + 1 });
            })
        );

        // Fetch the updated user list and send it as a response
        const updatedUsersList = await usersData.find().sort({ sequence: 1 });
        res.json(updatedUsersList);
    } catch (error) {
        console.error('Error updating user sequence:', error.message);
        res.status(500).send('Internal Server Error');
    }
}
