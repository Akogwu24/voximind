const express = require("express")
const app = express()
const chat = require("./routes")



const sanitizeMessage = require("./inputPurify/inputPurify")


sanitizeMessage("How are you Doing?")




// Middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json({ limit: "10mb" }))
app.set("view engine", "ejs")
app.use(chat)


app.listen(3000, () => {
    console.log("Server Started for Voxi on Port 3000")
})



app.get("/", (request, response) => {
    
    response.status(200).render("chat")
})