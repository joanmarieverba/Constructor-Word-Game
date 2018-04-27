//The file containing the logic for the course of the game, which depends on Word.js and:
//Randomly selects a word and uses the Word constructor to store it
//Prompts the user for each guess and keeps track of the user's remaining guesses

// inquirer npm package
const inquirer = require("inquirer");

const Word = require("./word.js");

let maxGuesses = 12;

const wordList = ["Minnesota", "Wisconsin", "Nevada", "Montana", "California", "Massachusetts"]
//create function to get a random number between min and max, inclusive
function getRandomInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// grab a word from the list at random
index = getRandomInclusive(0, wordList.length-1);
let thisWord = wordList[index];
console.log(thisWord);

// variable we will use to count the number of guesses
let count = 0;

let askQuestion = function () {
    inquirer.prompt([
      {
        name: "letter",
        message: "Guess a letter!!!"
      }
    ]).then(function (answers) {
          count++;
          let newWord = new Word(thisWord);
          newWord.outputString(answers.letter);


     });
};

askQuestion();

// let output = new Word("name");
// output.outputString("z");
// output.outputString("a");