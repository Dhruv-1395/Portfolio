import express from 'express';
import cors from 'cors'
import Router from './Router/Route.js'
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api',Router); 

app.listen(5000,()=>{
    console.log("server running at 5000");
    
});