
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
    const tokenized = tokenizer.tokenize(lexed)
    const fixedspelling = tokenized.map(word=> spellcorrector.correct(word)).toString()
    // const stopWordRemoved = stopword.removeStopwords(fixedspelling)

    console.log(fixedspelling)

   return trainVoxi(fixedspelling)
}




module.exports = sanitizeMessage