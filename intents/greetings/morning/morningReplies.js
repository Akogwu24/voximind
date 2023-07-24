const intent = "greeting.morning"
const english = require("../../../languages/english")

const morningReplies = [
  {
    intent: intent,
    utterance: "Good morning to you too!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Hello, have a great day!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Thank you, and good morning!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Wishing you a fantastic morning!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Morning vibes are the best!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Hey, it's a beautiful morning!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Rise and shine with joy!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Thanks, I hope you have a wonderful day!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Good morning, my friend!",
    language: english,
  },
  {
    intent: intent,
    utterance: "May your day be filled with sunshine!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Greetings with a smile!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Have an amazing morning!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Thank you, wishing you the same!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Good morning, have a splendid day!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Rise and greet the day with positivity!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Hello, have a blessed morning!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Thank you, and a happy morning to you!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Sending you warm morning wishes!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Have a lovely morning!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Good morning, may your day be magical!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Thank you, wishing you a wonderful morning!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Have a fantastic day ahead!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Hello, rise and conquer the day!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Good morning, enjoy the day!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Wishing you a peaceful morning!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Thank you, have a great morning too!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Greetings with a cup of coffee!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Have an awesome day!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Good morning, be awesome today!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Thank you, you too have a great morning!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Wishing you a day full of smiles!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Hello, have an incredible morning!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Good morning, let's make it a great day!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Thank you, have a splendid morning!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Have a productive day ahead!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Good morning, shine like the sun!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Thank you, a wonderful morning to you!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Wishing you a morning full of positivity!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Hello, may your morning be as bright as your smile!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Good morning, stay positive and happy!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Thank you, have an amazing morning!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Have a day filled with happiness and success!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Good morning, start your day with a positive attitude!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Thank you, have a wonderful morning!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Wishing you a morning full of inspiration!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Hello, have a refreshing morning!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Good morning, stay motivated and conquer your goals!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Thank you, have a fabulous morning!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Have a day filled with positivity and kindness!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Good morning, may your day be filled with positivity!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Thank you, have a beautiful morning!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Wishing you a morning filled with joy and excitement!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Hello, have a wonderful and productive day!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Good morning, stay focused and make the most of your day!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Thank you, have a bright and cheerful morning!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Have a day filled with new opportunities and success!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Good morning, may your day be filled with blessings!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Thank you, have a fabulous morning!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Wishing you a morning filled with creativity and inspiration!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Hello, have a fantastic and energetic morning!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Good morning, stay positive and spread kindness!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Thank you, have a bright and exciting morning!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Have a day filled with positivity and optimism!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Good morning, stay focused and determined!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Thank you, have a productive and successful morning!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Have a day filled with love and happiness!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Good morning, may your day be filled with blessings and laughter!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Thank you, have a wonderful and inspiring morning!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Wishing you a morning filled with positivity and joy!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Hello, have a great and motivated morning!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Good morning, stay positive and embrace new challenges!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Thank you, have a fabulous and creative morning!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Have a day filled with positivity and gratitude!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Good morning, may your day be full of positivity and success!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Thank you, have a beautiful and peaceful morning!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Wishing you a morning filled with creativity and enthusiasm!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Hello, have a fantastic and optimistic morning!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Good morning, stay focused and determined!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Thank you, have a productive and successful morning!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Have a day filled with love and happiness!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Good morning, may your day be filled with blessings and laughter!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Thank you, have a wonderful and inspiring morning!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Wishing you a morning filled with positivity and joy!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Hello, have a great and motivated morning!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Good morning, stay positive and embrace new challenges!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Thank you, have a fabulous and creative morning!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Have a day filled with positivity and gratitude!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Good morning, may your day be full of positivity and success!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Thank you, have a beautiful and peaceful morning!",
    language: english,
  },
  {
    intent: intent,
    utterance: "Wishing you a morning filled with creativity and enthusiasm!",
    language: english,
  },
];

module.exports = morningReplies