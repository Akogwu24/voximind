/**
 * Importing Voxi model for the Folder in which it had been initialized just to make things minimal and not bulky
 */

const voxi = require("../voxi/voxi")

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
    console.log(response.answer)

        
}).catch((err) => {
    console.log(err)
});
}


module.exports = trainVoxi