import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from "body-parser";
import routes from './src/routes/routes.js';

const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();

app.use(cors());

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);


const server = app.listen(PORT, () => {
    console.log(`your app is running on port ${PORT}`);
})