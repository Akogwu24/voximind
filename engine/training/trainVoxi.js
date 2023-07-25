
/**
 * Importing Voxi model for the Folder in which it had been initialized just to make things minimal and not bulky
 */

const voxi = require("../voxi/voxi")

/**
 * Fall Back Text Incase he Model Does ot Understand any of the Users Input
 */

const fallback = require("../../fallback/fallback")

/**
 * Importing the necessary intents and Replies to train the moel
 */

/**
 * Training Data For Greetings
 */
/**
 * Adding Documents
 */

const morningGreeting = require("../../intents/greetings/morning/morning")
const casualGreeting = require("../../intents/greetings/casual/casualGreetings")
const farewellGreetings = require("../../intents/greetings/farewell/farewellGreetings")
const pidginGreeting = require("../../intents/greetings/pidgin/pidgin")

morningGreeting.forEach(greeting => {
    
    voxi.addDocument(greeting.language,greeting.utterance,greeting.intent)
})

casualGreeting.forEach(greeting => {
     voxi.addDocument(greeting.language,greeting.utterance,greeting.intent)
})

farewellGreetings.forEach(greeting => {
    voxi.addDocument(greeting.language,greeting.utterance,greeting.intent)
})


pidginGreeting.forEach(greeting => {
    
    voxi.addDocument(greeting.language, greeting.utterance, greeting.intent)
})










/**
 * Corresponding Replies for Morning Greetings
 */

const morningReplies = require("../../intents/greetings/morning/morningReplies")
const casualResponse = require("../../intents/greetings/casual/casualResponse")
const farewellResponse = require("../../intents/greetings/farewell/farewellResponse")
const pidginResponse = require("../../intents/greetings/pidgin/pidginResponse")

morningReplies.forEach(morningreply => {
    voxi.addAnswer(morningreply.language,morningreply.intent, morningreply.utterance)
})

casualResponse.forEach(casualReply => {
    voxi.addAnswer(casualReply.language,casualReply.intent, casualReply.utterance)
})

farewellResponse.forEach(farewellReply => {
     voxi.addAnswer(farewellReply.language,farewellReply.intent, farewellReply.utterance)
})

pidginResponse.forEach(pidginReply => {
    voxi.addAnswer(pidginReply.language,pidginReply.intent, pidginReply.utterance)
})













































/**
 * Importing the english Language as well
 */
const english = require("../../languages/english")








/**
 * creating an aync function to train model and handle inputs
 */

const trainVoxi = async (userInput) => {
    
   await voxi.train()
   await voxi.save();
    const response = await voxi.process(english, userInput)
    

    return response
    // console.log(response.answer || fallback)

        

}

module.exports = trainVoxi