
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
 * Training Data For Morning Greetings
 */

const morningGreeting = require("../../intents/greetings/morning/morning")

morningGreeting.forEach(greeting => {
    
    voxi.addDocument(greeting.language,greeting.utterance,greeting.intent)
})

/**
 * Corresponding Replies for Morning Greetings
 */

const morningReplies = require("../../intents/greetings/morning/morningReplies")

morningReplies.forEach(morningreply => {
    voxi.addAnswer(morningreply.language,morningreply.intent, morningreply.utterance)
})


/**
 * Importing the english Language as well
 */
const english = require("../../languages/english")








/**
 * creating an aync function to train model and handle inputs
 */

const trainVoxi = async (userInput) => {
    
    voxi.train().then(async() => {
    voxi.save();
    const response = await voxi.process(english, userInput)
    console.log(response.answer || fallback)

        
}).catch((err) => {
    console.log(err)
});
}


module.exports = trainVoxi