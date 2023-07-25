const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const chatSchema = new Schema({

    user: {
        type: String
    }

})



const Chat = mongoose.model("chat", chatSchema)

module.exports = Chat