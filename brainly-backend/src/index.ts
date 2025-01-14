import express from "express";
import { Random } from "./utils";
import jwt from "jsonwebtoken";
import { contentModel, linkModel, userModel } from "./db";
// import { JWT_PASSWORD } from "./config";
import { Middleware } from "./middleware";
import cors from "cors";
import dotenv from "dotenv"
import mongoose from "mongoose";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());


async function Create(){
    await mongoose.connect(process.env.MONGO_URL||"")
    console.log(process.env.MONGO_URL)
    console.log("connected to the database")

    app.listen(3000,()=>{
        console.log("the server is listening on the port 3000")
    })
}
Create()

app.post("/api/v1/signup", async (req, res) => {
    // TODO: zod validation , hash the password
    const username = req.body.username;
    const password = req.body.password;

    try {
        await userModel.create({
            username: username,
            password: password
        }) 

        res.json({
            message: "User signed up"
        })
    } catch(e) {
        res.status(411).json({
            message: "User already exists"
        })
    }
})

app.post("/api/v1/signin", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const existingUser = await userModel.findOne({
        username,
        password
    })
    if (existingUser) {
        const token = jwt.sign({
            id: existingUser._id
        }, process.env.JWT_SECRET||"")

        res.json({
            token
        })
    } else {
        res.status(403).json({
            message: "Incorrrect credentials"
        })
    }
})

app.post("/api/v1/content", Middleware, async (req, res) => {
    const link = req.body.link;
    const type = req.body.type;
    await contentModel.create({
        link,
        type,
        title: req.body.title,
        userId: req.userId,
        tags: []
    })

    res.json({
        message: "Content added"
    })
    
})

app.get("/api/v1/content", Middleware, async (req, res) => {
    // @ts-ignore
    const userId = req.userId;
    const content = await contentModel.find({
        userId: userId
    }).populate("userId", "username")
    res.json({
        content
    })
})

app.delete("/api/v1/content", Middleware, async (req, res) => {
    const contentId = req.body.contentId;

    await contentModel.deleteMany({
        contentId,
        userId: req.userId
    })

    res.json({
        message: "Deleted"
    })
})

app.post("/api/v1/brain/share", Middleware, async (req, res) => {
    const share = req.body.share;
    if (share) {
            const existingLink = await linkModel.findOne({
                userId: req.userId
            });

            if (existingLink) {
                res.json({
                    hash: existingLink.hash
                })
                return;
            }
            const hash = Random(10);
            await linkModel.create({
                userId: req.userId,
                hash: hash
            })

            res.json({
                hash
            })
    } else {
        await linkModel.deleteOne({
            userId: req.userId
        });

        res.json({
            message: "Removed link"
        })
    }
})

app.get("/api/v1/brain/:shareLink", async (req, res) => {
    const hash = req.params.shareLink;

    const link = await linkModel.findOne({
        hash
    });

    if (!link) {
        res.status(411).json({
            message: "Sorry incorrect input"
        })
        return;
    }
    // userId
    const content = await contentModel.find({
        userId: link.userId
    })

    console.log(link);
    const user = await userModel.findOne({
        _id: link.userId
    })

    if (!user) {
        res.status(411).json({
            message: "user not found, error should ideally not happen"
        })
        return;
    }

    res.json({
        username: user.username,
        content: content
    })

})

