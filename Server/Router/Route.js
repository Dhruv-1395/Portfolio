import express from 'express'
const Router = express.Router();

// API endpoints
Router.get('/',(req,res)=>{
    res.send("hello");
})

export default Router;