const voxi = require("./engine/voxi/voxi")
const trainVoxi = require("./engine/training/trainVoxi")
// Languages

const english = require("./languages/english")


// add documents

voxi.addDocument(english,"hello","greeting")
voxi.addDocument(english,"hi","greeting")
voxi.addDocument(english,"hey you","greeting")
voxi.addDocument(english,"yo","greeting")
voxi.addDocument(english,"good morning","greeting")
voxi.addDocument(english, "good afternoon", "greeting")


// add answers

voxi.addAnswer(english,"greeting", "Hey!")
voxi.addAnswer(english,"greeting", "Hey There")
voxi.addAnswer(english,"greeting", "Hi")
voxi.addAnswer(english, "greeting", "Yo whatsupp")

// train model

// voxi.train().then(async() => {
//     voxi.save();
//     const response = await voxi.process(english, "good morning")
//     console.log(response.answer + "How can i Help You Today?")
// }).catch((err) => {
//     console.log(err)
// });

trainVoxi("Hello")

