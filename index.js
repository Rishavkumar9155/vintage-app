import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import DetailsModel from "./Models/Details.js"
const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/details");
app.post("/register",(req,res)=>{
    DetailsModel.create(req.body)
    .then(details=>res.json(details))
    .catch(err=>res.json(err))

})
app.listen(3001,()=>{
    console.log("server is running")

})