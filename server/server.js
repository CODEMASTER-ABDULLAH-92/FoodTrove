import express from 'express'
import cors from 'cors'
import connectDb from './db/index.db.js';
import 'dotenv/config'
import connectCloudinary from './config/Cloudinary.js';
const app = express();




app.use(cors());
app.use(express.json());


connectDb();
connectCloudinary();




app.use('/',(req,res)=>{
    res.send('Api Working');
})

app.listen(process.env.PORT,()=>{
    console.log(`App is listend on PORT: ${process.env.PORT}`);
})