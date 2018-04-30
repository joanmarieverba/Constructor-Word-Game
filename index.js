//The file containing the logic for the course of the game, which depends on Word.js and:
//Randomly selects a word and uses the Word constructor to store it
//Prompts the user for each guess and keeps track of the user's remaining guesses

// inquirer npm package
const inquirer = require("inquirer");
// import Word
const Word = require("./word.js");

let maxGuesses = 12;
let count = 0;

const wordList = ["Minnesota", "Wisconsin", "Nevada", "Montana", "California", "Massachusetts"]
//create function to get a random number between min and max, inclusive
function getRandomInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

  // grab a word from the list at random
  let index = getRandomInclusive(0, wordList.length - 1);
  let thisWord = wordList[index];
  console.log(thisWord);
  let newWord = new Word(thisWord);

let checkForEnd = function(string) {
  let stringArray = string.split('');
  let theEnd = true;
  for (let i = 0; i < string.length; i++) {
    if (stringArray[i] === "_") {
      theEnd = false;
    };
  };
  return theEnd;
};

let askQuestion = function () {

  if (count < maxGuesses){

      inquirer.prompt([
        {
          name: "letter",
          message: "Guess a letter!!!"
        }
      ]).then(function (answers) {

        let screen = newWord.outputString(answers.letter);
        console.log(screen);
        if (newWord.processCharacter(answers.letter)) {
          console.log("Correct!");
        } else {
          console.log("Incorrect!");
          console.log(`${maxGuesses - count - 1} guesses remaining.`);
        };
        
        count++;
        let success = checkForEnd(screen);
        if (success){
          console.log("You got it right! Congratulations!")
        
        } else {
          askQuestion();
        };

      });

  } else {

      console.log("You've run out of guesses");
  
  };
};

askQuestion();


