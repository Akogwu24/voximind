// const Message = require("./model/messageModel")
// const Chat = require("./model/chatModel")
const express = require("express")
const router = express.Router()
const sanitizeMessage = require("./inputPurify/inputPurify")


router.post("/message/new", async (request, response) => {
    
    const message = request.body.message

    try {

    // Filter Input

        

        const processMessage = await sanitizeMessage(message)

        return response.send(processMessage)

    
    const newMessage = Message.create()



    } catch (error) {
        
        console.log(error)
    }

})





module.exports = router