import app from './app'
import { connectDB } from './config/db';
import dotenv from "dotenv";
dotenv.config();

const port = 5000


connectDB().then(()=>{
app.listen(port,()=>{
    console.log(`Running at http://localhost:${port}`);
})
})