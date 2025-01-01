import express from "express"
const app=express()
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config();

import { userModel,contentModel, linkModel,tagModel } from "./db"
import  {Middleware}  from "./middleware"
import {z} from "zod"
import mongoose from "mongoose"
import bcrypt from "bcrypt"
import { Random } from "./utils"
app.use(express.json())

async function Main(){
    await mongoose.connect(process.env.MONGO_URL||"")
    console.log("connected to the database")
    console.log(process.env.MONGO_URL)
    app.listen(3000,()=>{
        console.log("listening on port 3000")
    })
}
Main()

app.post("/api/v1/signup",async(req,res)=>{
    const requiredBody=z.object({
        username:z.string().min(3).max(10),
        password:z.string().min(3).max(12)
    })
    const parsedData=requiredBody.safeParse(req.body)
    if(!parsedData.success){
        res.json({
            message:parsedData.error.message
        })
    }
    
    const{username,password}=req.body;
    const hashedPassword=await bcrypt.hash(password,6)
    await userModel.create({
        username:username,
        password:hashedPassword
    })
    res.json({
        message:"you have been signed up successfully"
    })


})
app.post("/api/v1/login",async(req,res)=>{
    const{username,password}=req.body;
    try{
        const user=await userModel.findOne({
            username
            
        })

        if(!user){
            res.json({
                message:"Sorry the user does not exists"
            })
        }
        //@ts-ignore
        const validPassword=bcrypt.compare(password,user.password)
        if(!validPassword){
            res.json({
                message:"the password does not match"
            })
        }
        else{
            const token=jwt.sign({
                id:user?._id,

            },process.env.JWT_SECRET||"")
            if(token){
                res.json({
                    token:token
                })
            }
            else{
                res.status(403).send({
                    message:"incorrect credentials"
                })
            }
            

        }

    }
    catch(e){
        res.json({
            message:"some internal error occured"
        })

    }
    
    
    
    
    

})

app.post("/api/v1/content",Middleware,async(req,res)=>{
    const{link,title}=req.body
    await contentModel.create({
        link,
        title,
        //@ts-ignore
        userId:req.userId,
        tags:[]
    })
    res.json({
        message:"your content has been added successfully"
    })
    

})

app.get("/api/v1/content",Middleware,async(req,res)=>{
    //@ts-ignore
    const userId=req.userId
    const content=await contentModel.find({
        userId:userId
    })
    res.json({
        content
    })

})
app.post("/api/v1/brain/share",Middleware,async(req,res)=>{
    const share=req.body.share;
    if(share){
        const existingLink=await linkModel.findOne({
            //@ts-ignore
            userId:req.userId
        })
        if(existingLink){
            res.json({
                hash:existingLink.hash
            })
            return
        }

    }
    else{

    }
    
        


})
app.post("/api/v1/brain/:shareLink",async(req,res)=>{
    const hash=req.params.shareLink;
    const link=await linkModel.findOne({
        hash
    })
    if(!link){
        res.status(411).json({
            message:"the link provided is incorrect"
        })
        return
    }
    const content=await contentModel.findOne({
        userId:link.userId
    })
    const user=await userModel.findOne({
        _id:link.userId
    })
    if(!user){
        res.status(411).send({
            message:"error ideally shoudnt happen"
        })
        return
    }
    res.json({
        username:user.username,
        content:content

    })
   


})