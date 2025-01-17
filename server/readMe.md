Important Note Firsly create the controllers function then create routes



import express from 'express'
import cors from 'cors'
import 'dotenv/config'


// App Config

const app = express();
const PORT = process.env.PORT || 4000


//MiddleWares


app.use(express.json());
app.use(cors());



//Api Endpoints
app.get('/',(req,res)=>{
res.send('Api ')
})


app.listen(PORT,()=>{
    console.log("Server Started on the PORT: " + PORT);
})


 =====================>>>>>>>>>> 2           After connet the database 


import mongoose from "mongoose";


const connectDb = async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/Great-E`);
        console.log("Db Connect");
    } catch (error) {
        console.error("Mongo Connecting Error", error);
    }
}
export default connectDb;



// Done here 





3 ==================== >      Cloudinary Storage



import {v2 as cloudinary} from 'cloudinary'

const connectCloudinary = async ()=>{
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_SECRET_KEY
})
}

export default connectCloudinary;


//yaha tek Done 




4  =================== >>>> Mongoose Model 


import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    image:{type:Array,required:true},
    category:{type:String,required:true},
    category:{type:String,required:true},
    subCategory:{type:String,required:true},
    sizes:{type:Array,required:true},
    bestseller:{type:Boolean},
    date:{type:Number,required:true},
},{timestamps:true})

const productModel =mongoose.models.product || mongoose.model('product',productSchema);

export default productModel;


5 =============== >>>>> User Model 



import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    cartDate:{type:Object,default:{}},
},{timestamps:true,minimize:false})
const userModel = mongoose.models.user || mongoose.model("user", userSchema);




6 ============= >>> Create the user controllers 


// Route For user Login
const loginUser = async (req,res)=>{

}


//Route for user Registeration
const registerUser = async (req,res)=>{

}
//Route For Admin Login
const adminLogin = async (req,res) =>{
    
}
export {loginUser,registerUser,adminLogin};



7 =============>>>>>>>> Create the User Route 

import express from 'express'
import { loginUser,registerUser,adminLogin } from '../controllers/user.controller.js'
const userRouter = express.Router();

userRouter.post('/register',registerUser);
userRouter.post('/login',loginUser);
userRouter.post('/admin',adminLogin);

export default userRouter;


8 =============== >>>>>>>>> Create the code for user's controllers and Login, registeration 


import userModel from "../models/user.model.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// Route For user Login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User does't exist" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = createToken(user._id);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invaild Credientials" });
    }
  } catch (error) {
    console.log("Reg error", error);
    res.json({ success: false, message: error.message });
  }
};

//Route for user Registeration
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // checking user already exist or not
    const exist = await userModel.findOne({ email });
    if (exist) {
      return res.json({ success: false, message: "User already exist" });
    }
    // validating email and strong password
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please Enter a valid email",
      });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Password must be at least 8 characters long.",
      });
    }

    if (!/[A-Z]/.test(password)) {
      return res.json({
        success: false,
        message: "Password must contain at least one uppercase letter.",
      });
    }
    if (!/[a-z]/.test(password)) {
      return res.json({
        success: false,
        message: "Password must contain at least one lowercase letter.",
      });
    }
    if (!/[\W_]/.test(password)) {
      // Includes special characters and underscores
      return res.json({
        success: false,
        message: "Password must contain at least one special character.",
      });
    }

    // Hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });
    const user = await newUser.save();

    //Create the token for user
    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log("Reg error", error);
    res.json({ success: false, message: error.message });
  }
};
//Route For Admin Login
const adminLogin = async (req, res) => {
    
};
export { loginUser, registerUser, adminLogin };









=============== >>>>>>>> create the Product Controllers
Create the uplaod middleware 
import multer from "multer";

const storage = multer.diskStorage({
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const upload = multer({storage});
export default upload;
   



                            ==========  >>>>>>>>>>>>> create the logic for that 
                            import {v2 as cloudinary} from 'cloudinary'
import productModel from '../models/product.model.js';

// Add products 
const addProduct = async (req,res)=>{
try {
    const {name,description,price,category,subCategory,sizes,bestseller} = req.body;
    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1,image2,image3,image4].filter((item)=> item !== undefined)
    let imageUrl = await Promise.all(
        images.map(async (item)=>{
            let result = await cloudinary.uploader.upload(item.path,{resource_type:'image'})
            return result.secure_url
        })
    )
//Save the data in database 

const proDuctData = {
    name,
    description,
    price:Number(price),
    category,subCategory,bestseller: bestseller === 'true' ? true : false,
    sizes:JSON.parse(sizes),
    image:imageUrl,
    date:Date.now()
}
// console.log(proDuctData);

const product = new productModel(proDuctData)
await product.save();
res.json({success:true,message:'Product Addedd'})
    // console.log(name,description,price,category,subCategory,sizes,bestseller);
    // console.log(image1,image2,image3,image4);
    // console.log(imageUrl);
    
} catch (error) {
    res.json({success:false,message:error.message})
    console.log(error);
}
}



//List 
const ListProduct = async (req,res)=>{
try {
    const products = await productModel.find({});
    res.json({success:true,products})
} catch (error) {
}
}


// Remove 
const removeProduct = async (req,res)=>{
    try {
        await productModel.findByIdAndDelete(req.body._id)
        res.json({success:true,message:'Product removed'})
        
    } catch (error) {
    }
}


// Single Product
const singleProduct = async (req,res)=>{
    try {
        const {productId} = req.body;
        const product = await productModel.findById(productId)
        res.json({success:true,product})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message});
}
}


export {ListProduct,addProduct,removeProduct,singleProduct}






=============== >>>>>>>> Create the product Router 
import express from express
import { addProduct,ListProduct,removeProduct,singleProduct } from "../controllers/product.controller.js"

const productRouter = express.Router()

productRouter.post('/add',addProduct);
productRouter.get('/list',ListProduct);
productRouter.post('/remove',removeProduct);
productRouter.post('/single',singleProduct);

export default productRouter;








==================== >>>>>>>>>> After that create the admin authentication for adding and removing the priducts 