/* eslint-disable no-async-promise-executor */
/* eslint-disable no-undef */
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
});

export const UploadImage=async(file,folder)=>{
    const arrayBuffer=await file.arrayBuffer()
    const bytes=Buffer.from(arrayBuffer)
   

    return new Promise(async(resolve,reject)=>{
        await cloudinary.uploader.upload_stream({
            resource_type:"auto",
            folder:folder
        },async(err,result)=>{
            if(err){
                reject(err.message)
            }
            resolve(result)
        }).end(bytes)
    })
}