const Mustache = require("mustache");
const fs = require("fs");

const MUSTACHE_MAIN_DIR = "./main.mustache";

// substract a startging year from the actual one
const yearsSince = (start) => {
  const date = new Date();
  const year = date.getFullYear();
  return year - start;
};

//quote DATA
const motivationalQuotes = [
  "Believe you can and you're halfway there. -Theodore Roosevelt",
  "Your time is limited, don't waste it living someone else's life. -Steve Jobs",
  "The only way to achieve the impossible is to believe it is possible. -Charles Kingsleigh (Alice in Wonderland)",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. -Winston Churchill",
  "The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt",
  "In the middle of every difficulty lies opportunity. -Albert Einstein",
  "The only limit to our realization of tomorrow will be our doubts of today. -Franklin D. Roosevelt",
  "The only person you are destined to become is the person you decide to be. -Ralph Waldo Emerson",
  "Success is not in what you have, but who you are. -Bo Bennett",
  "Don't watch the clock; do what it does. Keep going. -Sam Levenson",
  "You are never too old to set another goal or to dream a new dream. -C.S. Lewis",
  "Success is walking from failure to failure with no loss of enthusiasm. -Winston Churchill",
  "The only way to do great work is to love what you do. -Steve Jobs",
  "Start where you are. Use what you have. Do what you can. -Arthur Ashe",
  "What you get by achieving your goals is not as important as what you become by achieving your goals. -Zig Ziglar",
  "The only limit to our realization of tomorrow will be our doubts of today. -Franklin D. Roosevelt",
  "The best way to predict the future is to create it. -Peter Drucker",
  "The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt",
  "Don't watch the clock; do what it does. Keep going. -Sam Levenson",
  "Your time is limited, don't waste it living someone else's life. -Steve Jobs",
];

// To get a random quote from the array:
const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];

let DATA = {
  name: "Matt",
  welcome: 'hi there',
  email: "matt.freelance.web@gmail.com",
  malt: "matteocampus1",
  linkedin: "matteo-campus-freelance-reactjs",
  professionalExperience: `I have been working as a front-end web developer for **${yearsSince(
    2019
  )} years**, with a particular expertise in JavaScript, Typescript, React, Next.js, and Tailwind CSS.`,
  goal: "What excites me the most about frontend web development is the opportunity to create applications that are accessible worldwide with just a few clicks. **My goal is to design high-performance, accessible, pixel-perfect, and responsive user interfaces.**",
  approaches:
    "I follow a **performance-driven approach**, ensuring that the graphical interfaces I create are optimized to provide a seamless user experience. I also place great importance on **accessibility** to make my applications usable by all.",
  additionalSkills:
    "Outside of front-end web development, I also have experience as a former **high-level athlete**, representing the French trampoline teams. This experience taught me **perseverance, discipline, and the ability to work in a team**.",
    quote:randomQuote
};

function generateReadMe() {
  fs.readFile(MUSTACHE_MAIN_DIR, (err, data) => {
    if (err) throw err;
    const output = Mustache.render(data.toString(), DATA);
    fs.writeFileSync("README.md", output);
  });
}

generateReadMe();
