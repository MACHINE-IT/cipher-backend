import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const userSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter your first name.'
    },
    lastName: {
        type: String,
        required: 'Enter your last name.'
    },
    email: {
        type: String,
        required: 'Enter your email.'
    },
    userName: {
        type: String,
        required: 'Enter your username.'
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});