// import {v2 as cloudinary} from 'cloudinary'

// const connectCloudinary = async ()=>{
// cloudinary.config({
//     cloud_name:process.env.CLOUDINARY_NAME,
//     api_key:process.env.CLOUDINARY_API_KEY,
//     api_secret:process.env.CLOUDINARY_SECRET_KEY
// })
// }

// export default connectCloudinary;

import {v2 as cloudinary} from 'cloudinary'

const connectCloudinary = async ()=>{
    cloudinary.config({
        api_secret:process.env.CLOUDINARY_SECRET_KEY,
        api_key:process.env.CLOUDINARY_API_KEY,
        cloud_name:process.env.CLOUD_NAME
    })
}
export default connectCloudinary;