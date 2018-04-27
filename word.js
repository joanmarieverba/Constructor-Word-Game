//Word.js should only require Letter.js
const Letter = require("./letter.js");

// When we use the 'extends' keyword in our class declation, this class inherits 
// the methods and properties from the class it extends 
class Word {
    constructor(word) {
        
        // properties
        this.wordArray = word.split('');
        // console.log("wordArray ", this.wordArray);
        this.wordObjectArray = [];
        for (let i=0; i < word.length; i++){
            this.currentLetter = new Letter(this.wordArray[i], true);
        //    console.log ("this current Letter ", this.currentLetter);
            this.wordObjectArray.push(new Letter(this.wordArray[i], true));
        };
       // console.log("wordObjectArray ", this.wordObjectArray);
    };

    // returns a string representing the word
    outputString(guessedLetter) {
        let stringOnScreen = "";
        for(let i = 0; i < this.wordObjectArray.length; i++) {
            stringOnScreen = stringOnScreen + this.wordObjectArray[i].printToScreen(guessedLetter) + " ";
        };
        //console.log("stringOnScreen ", stringOnScreen);
        console.log(stringOnScreen);
    };

    //takes a character as an argument and calls the check function on each letter object
    processCharacter(char){
        for (let i = 0; i < this.wordObjectArray.length; i++) {
            this.wordObjectArray[i].charCheck(char);
        };
    };

};

module.exports = Word;

// let output = new Word("name");
// output.outputString("z");
// output.outputString("a");

// this.firstLetter = new Letter(this.wordArray[0], true);
// console.log("firstletter ", this.firstLetter);
// this.firstLetter.printToScreen("z");

// outputString(guessedLetter) {
//     let outputArray = this.wordObjectArray.map(function (elem) {
//         elem.printToScreen(guessedLetter);
//     });
//     console.log("outputArray ", outputArray);
// };
