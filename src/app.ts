import express, { Application } from "express";
import cors from 'cors';
import userRoute from './api/routes/user.router'


const app:Application = express()



app.use(cors())
app.use(express.json())

app.use((req,res,next) =>{
    console.log(req.method, req.url)
    next();
})

app.get("/",(req, res)=>{
    res.status(200).send(`Server running...`)
})

app.use("/api/users",userRoute)



export default app;