const Message = require("./model/messageModel")
// const Chat = require("./model/chatModel")
const express = require("express")
const router = express.Router()
const sanitizeMessage = require("./inputPurify/inputPurify")
const fallback = require("./fallback/fallback")

router.post("/message/new", async (request, response) => {
    
    const message = request.body.message
    

    try {

    // Filter Input

        if(!message){

            response.status(422).json({status:"error", message:"Message Is Required"})
            return
        }
        
        const processMessage = await sanitizeMessage(message)

        console.log(processMessage)
        
        const userMessage = await Message.create({user:"collinsadi",message:message,negative: processMessage.sentiment.vote === "negative" ? true : false,sender:"user"})

        const botMessage = await Message.create({user:"collinsadi",message:processMessage.answer || fallback, sender:"bot" })
    
        response.status(200).json({userMessage,botMessage})



    } catch (error) {
        
        console.log(error)
    }

})

router.get("/messages", async (request, response) => {
    
    const user = "collinsadi"

    const messages = await  Message.find({user})

    response.json({messages})
})

router.get("/review", (request, response) => {

    response.render("review")

})

module.exports = router