// import express from 'express'
// import fs from 'fs'
// import path from 'path'
// import React from "react";
// import ReactDOMServer from "react-dom/server";
// import App from '../src/App'

const express = require('express')
const path = require('path')

// const  PORT = process.env.PORT || 3001

// const PORT = 3001
//
const app = express()
//
// app.use('^/$',(req,res,next)=>{
//     fs.readFile(path.resolve('./public/index.html'), 'utf-8',(err,data)=>{
//         if(err){
//             console.log(err)
//             return res.status(500).send('Server error')
//         }
//         return res.send(data.replace('<div id="root"></div>',`<div id="root">${ReactDOMServer.renderToString(<App /> )}</div>`))
//     })
// })
//
// app.use(express.static(path.resolve(__dirname,'..','public')))
//
// app.listen(PORT,()=>{
//     console.log(`App launched on ${PORT}`)
// })

app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'))
})

app.listen(3001)



