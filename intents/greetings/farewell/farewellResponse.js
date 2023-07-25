const intent = "greeting.farewell";
const english = require("../../../languages/english");

const farewellResponse = [
  {
    intent: intent,
    utterance: "Don't worry, I'm always here to help.",
    language: english
  },
  {
    intent: intent,
    utterance: "You can count on me. I'm here to assist you.",
    language: english
  },
  {
    intent: intent,
    utterance: "Feel free to reach out anytime. I'm here to lend a hand.",
    language: english
  },
  {
    intent: intent,
    utterance: "Rest assured, I'm available to help whenever you need it.",
    language: english
  },
  {
    intent: intent,
    utterance: "No problem at all. I'll be here to support you.",
    language: english
  },
  {
    intent: intent,
    utterance: "You've got a friend in me. I'm here to help.",
    language: english
  },
  {
    intent: intent,
    utterance: "Just say the word, and I'll be here to assist you.",
    language: english
  },
  {
    intent: intent,
    utterance: "I'm always at your service. How can I assist you?",
    language: english
  },
  {
    intent: intent,
    utterance: "Count on me for support. I'm here whenever you need me.",
    language: english
  },
  {
    intent: intent,
    utterance: "You're not alone. I'm here to help you through anything.",
    language: english
  },
  {
    intent: intent,
    utterance: "I've got your back. I'm here to lend my support.",
    language: english
  },
  {
    intent: intent,
    utterance: "Need a hand? I'm here for you.",
    language: english
  },
  {
    intent: intent,
    utterance: "Feel free to ask for help. I'm always available.",
    language: english
  },
  {
    intent: intent,
    utterance: "I'm just a message away. I'll be here to assist you.",
    language: english
  },
  {
    intent: intent,
    utterance: "Never hesitate to reach out. I'm here to support you.",
    language: english
  },
  {
    intent: intent,
    utterance: "You can rely on me. I'm here to help.",
    language: english
  },
  {
    intent: intent,
    utterance: "Need assistance? I'm here, ready to lend a hand.",
    language: english
  },
  {
    intent: intent,
    utterance: "Don't stress. I'm here to assist with anything you need.",
    language: english
  },
  {
    intent: intent,
    utterance: "Just let me know how I can help. I'm always here.",
    language: english
  },
  {
    intent: intent,
    utterance: "I'll be here to support you every step of the way.",
    language: english
  },
  {
    intent: intent,
    utterance: "You can always rely on me. I'm here to lend my support.",
    language: english
  },
  {
    intent: intent,
    utterance: "Anytime you need help, I'll be here for you.",
    language: english
  },
  {
    intent: intent,
    utterance: "No need to worry. I'm here, ready to assist.",
    language: english
  },
  {
    intent: intent,
    utterance: "You're important to me. I'm here to help.",
    language: english
  },
  {
    intent: intent,
    utterance: "You don't have to face it alone. I'm here to support you.",
    language: english
  },
  {
    intent: intent,
    utterance: "I'll be your guide. I'm always here to help.",
    language: english
  },
  {
    intent: intent,
    utterance: "In times of need, remember I'm here to lend a hand.",
    language: english
  },
  {
    intent: intent,
    utterance: "You're not bothering me at all. I'm here to assist.",
    language: english
  },
  {
    intent: intent,
    utterance: "I'm just a call/message away. I'll be here to support you.",
    language: english
  },
  {
    intent: intent,
    utterance: "You can lean on me. I'm here to help you through.",
    language: english
  },
  {
    intent: intent,
    utterance: "You're never alone. I'm here, ready to lend my support.",
    language: english
  },
  {
    intent: intent,
    utterance: "Feel free to reach out whenever you need assistance. I'm here.",
    language: english
  },
  {
    intent: intent,
    utterance: "You can always count on me. I'm here to help.",
    language: english
  },
  {
    intent: intent,
    utterance: "I'm here to support you, no matter what.",
    language: english
  },
  {
    intent: intent,
    utterance: "Don't hesitate to ask for help. I'm always here.",
    language: english
  },
  {
    intent: intent,
    utterance: "Need a hand? I'm here to lend one.",
    language: english
  },
  {
    intent: intent,
    utterance: "You're important to me. I'll be here to assist you.",
    language: english
  },
  {
    intent: intent,
    utterance: "I'm just one message away. I'm here to support you.",
    language: english
  },
  {
    intent: intent,
    utterance: "You're not alone in this. I'm here to help.",
    language: english
  },
  {
    intent: intent,
    utterance: "I'll be here whenever you need a helping hand.",
    language: english
  },
  {
    intent: intent,
    utterance: "Worry not, I'm always here to assist you.",
    language: english
  },
  {
    intent: intent,
    utterance: "You can always reach out. I'm here to support you.",
    language: english
  },
  {
    intent: intent,
    utterance: "Lean on me for help. I'm here to lend my support.",
    language: english
  },
  {
    intent: intent,
    utterance: "Don't stress. I'm here, ready to assist.",
    language: english
  },
  {
    intent: intent,
    utterance: "You're never bothering me. I'm here to help.",
    language: english
  },
  {
    intent: intent,
    utterance: "I'm just one call/message away. I'll be here to support you.",
    language: english
  },
  {
    intent: intent,
    utterance: "You're not alone in this journey. I'm here to lend a hand.",
    language: english
  },
  {
    intent: intent,
    utterance: "You've got a friend in me. I'm here to help you out.",
    language: english
  },
  {
    intent: intent,
    utterance: "Feel free to ask for help. I'm always here to assist.",
    language: english
  },
  {
    intent: intent,
    utterance: "You can rely on me. I'm here to support you.",
    language: english
  },
  {
    intent: intent,
    utterance: "Need assistance? I'm here, ready to lend a hand.",
    language: english
  },
  {
    intent: intent,
    utterance: "Don't worry. I'm here to help with anything you need.",
    language: english
  },
  {
    intent: intent,
    utterance: "Just let me know how I can help. I'm always here.",
    language: english
  },
  {
    intent: intent,
    utterance: "I'll be here to support you every step of the way.",
    language: english
  },
  {
    intent: intent,
    utterance: "You can always rely on me. I'm here to lend my support.",
    language: english
  },
  {
    intent: intent,
    utterance: "Anytime you need help, I'll be here for you.",
    language: english
  },
  {
    intent: intent,
    utterance: "No need to worry. I'm here, ready to assist.",
    language: english
  },
  {
    intent: intent,
    utterance: "You're important to me. I'm here to help.",
    language: english
  }
]


module.exports = farewellResponse