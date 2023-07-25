const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const messageSchema = new Schema({

    user: {
        type: String
    },
    message: {
        type: String
    },
    negative: {
        type: Boolean,
        default:false
    },
    sender: {
        type: String,
    },

})



const Message = mongoose.model("message", messageSchema)

module.exports = Message