const express = require("express")
const app = express()
const chatRoute = require("./routes")
const mongoose = require('mongoose')



const url = "mongodb://127.0.0.1:27017/voximind"

// Database

mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})

// Middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json({ limit: "10mb" }))
app.set("view engine", "ejs")
app.use(chatRoute)


app.listen(3000, () => {
    console.log("Server Started for Voxi on Port 3000")
})



app.get("/", (request, response) => {
    
    response.status(200).render("chat")
})