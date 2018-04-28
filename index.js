//The file containing the logic for the course of the game, which depends on Word.js and:
//Randomly selects a word and uses the Word constructor to store it
//Prompts the user for each guess and keeps track of the user's remaining guesses

// inquirer npm package
const inquirer = require("inquirer");
// import Word
const Word = require("./word.js");

let maxGuesses = 3;
let count = 0;

const wordList = ["Minnesota", "Wisconsin", "Nevada", "Montana", "California", "Massachusetts"]
//create function to get a random number between min and max, inclusive
function getRandomInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// grab a word from the list at random
index = getRandomInclusive(0, wordList.length - 1);
let thisWord = wordList[index];
console.log(thisWord);
let newWord = new Word(thisWord);

let askQuestion = function () {

  if (count < maxGuesses){

      inquirer.prompt([
        {
          name: "letter",
          message: "Guess a letter!!!"
        }
      ]).then(function (answers) {

        newWord.outputString(answers.letter);
        if (newWord.processCharacter(answers.letter)) {
          console.log("Correct!");
        } else {
          console.log("Incorrect!");
          console.log(`${maxGuesses - count} guesses remaining.`);
        };
        count++;
        askQuestion();
      });

  } else {
    console.log("You've run out of guesses");
  };
};

askQuestion();


// let output = new Word("name");
// output.outputString("z");
// output.outputString("a");