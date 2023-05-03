import  express from "express";
import {data} from './data.js'

const APP =express()

APP.get('/api/products', (req, res)=>{
    res.send(data.products)
})

const PORT = process.env.PORT || 5000;

APP.listen(PORT, ()=>{
    console.log (`Started serving at Port: http://localhost:${PORT}`)
})