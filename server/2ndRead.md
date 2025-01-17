class ApiError extends Error{
    constructor(
        statusCode,
        message='Something went wrong',
        errors=[],
        statck=''
    ){
        super(message)
        this.statusCode=statusCode
        this.data=null
        this.message = message
        this.success = false;
        this.errors = errors
        if(statck){
            this.stack=statck
        }
        else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}
export {ApiError}






Api response 


class ApiResponse {
    constructor(
        statusCode,
        data,
        message='Success'
    ){
        this.statusCode = statusCode,
        this.data = data
        this.message = message
        this.success = statusCode < 400
    }
}


//Yaha tek done ho gya hai 










//AsyncHander kara ga kya,Ak method ya function banya ga aur os ko export kar da ga sirf ya kam hai, This is a wrapper function which we reuse in our code. 









// Sure! This code snippet defines a function called asyncHander, which is a utility to help handle asynchronous operations in Express.js route handlers.

// Let’s break it down:

// Function Definition: asyncHander is a function that takes another function, requestHandler, as an argument.

// Returning a New Function: Inside asyncHander, it returns a new function that takes three parameters: req, res, and next. These parameters are standard in Express.js middleware functions.

// Handling Promises: The new function wraps the requestHandler in a Promise.resolve(). This is useful because requestHandler might return a promise (for example, if it does some asynchronous work).

// Error Handling: If requestHandler's promise is rejected (i.e., if there’s an error), the .catch((err) => next(err)) part will catch the error and pass it to the next function. In Express, next is used to pass control to the next middleware function, or to handle errors if one is provided.

// In simpler terms, asyncHander helps ensure that if there are any errors in an asynchronous route handler, those errors get properly passed to the error-handling middleware in Express.

// import { asyncHander } from './path/to/asyncHander';

// app.get('/example', asyncHander(async (req, res, next) => {
//     // Your asynchronous code here
//     const data = await someAsyncFunction();
//     res.send(data);
// }));
// In this example, if someAsyncFunction throws an error, asyncHander will catch it and pass it to the error-handling middleware.









const asyncHander = (requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
}
export {asyncHander}















    // const asyncHander = ()=>{}
    // Now the above function accept the function as a parameter
    // const asyncHander = (funct)=>{()=>{}}
        //The simple thing is that we remove only curly brace
        //const asyncHandler = (funct)=> async()=>{}

// const asyncHander = (fn)=> async (req,res,next)=>{
//     try {
//         await fn(req,)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             message:error.message
//         })
//     }
// }










import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
const app = express()
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:'16kb'}))
app.use(express.urlencoded({extended:true,limit:'16kb'}))
app.use(express.static('public'))
// app.use(express.static(path.join(__dirname,'public')))
app.use(cookieParser());
export {app}







import mongoose from "mongoose";
import DBConnection from "./db/index.js";
import dotenv from 'dotenv'
dotenv.config({
    path:'./env'
})
DBConnection()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log('DB connection failed!!! ',err);
})