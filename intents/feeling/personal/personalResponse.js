const english = require("../../../languages/english")
const intent = "feelings.personal"
const ai = "as an AI Language Model, I am Just Here to Help With the best ok my knowledge, and i do not have any feeling just like normal humans"



const personalResponse = [
    {
        intent: intent,
        utterance: ai,
        language:english
    },
    {
        intent: intent,
        utterance: `Thanks For Caring, How May I be of Help?, ${ai}`,
        language:english
    },
]


module.exports = personalResponse