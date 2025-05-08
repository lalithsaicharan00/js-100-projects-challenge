let quotes = [
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  "The way to get started is to quit talking and begin doing. - Walt Disney",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
  "You only live once, but if you do it right, once is enough. - Mae West",
  "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
  "The only impossible journey is the one you never begin. - Tony Robbins",
  "Life is either a daring adventure or nothing at all. - Helen Keller",
  "To live is the rarest thing in the world. Most people exist, that is all. - Oscar Wilde",
  "The purpose of our lives is to be happy. - Dalai Lama",
  "Get busy living or get busy dying. - Stephen King",
  "You have within you right now, everything you need to deal with whatever the world can throw at you. - Brian Tracy",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "The best way to predict the future is to create it. - Peter Drucker",
  "Do not wait to strike till the iron is hot, but make it hot by striking. - William Butler Yeats",
];

let randomIndex = Math.floor(Math.random() * quotes.length) + 1;
let randomQuote = quotes[randomIndex];

console.log(randomQuote);
