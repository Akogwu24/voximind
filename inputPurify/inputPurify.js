
const trainVoxi = require("../engine/training/trainVoxi")
const aposToLexForm = require("apos-to-lex-form")
const {WordTokenizer} = require("natural")
const tokenizer = new WordTokenizer()
const SpellCorrector = require("spelling-corrector")
const spellcorrector = new SpellCorrector()
spellcorrector.loadDictionary();
const stopword = require("stopword")


// const Input = "Good Morning Big Man"

const sanitizeMessage = async (input) => {

    const lexed = aposToLexForm(input).toLowerCase().replace(/[^a-zA-Z\s]+/g, "")
    const tokenized = tokenizer.tokenize(lexed).join(" ").toString()
    // const fixedspelling = tokenized.map(word=> spellcorrector.correct(word))
    // const stopWordRemoved = stopword.removeStopwords(fixedspelling)

    console.log(tokenized)

   return trainVoxi(tokenized)
}




module.exports = sanitizeMessage