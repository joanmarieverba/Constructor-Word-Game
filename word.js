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
            this.wordObjectArray.push(new Letter(this.wordArray[i], false));
        };
       // console.log("wordObjectArray ", this.wordObjectArray);
    };

    // returns a string representing the word
    outputString(guessedLetter) {
        let stringOnScreen = "";
        for(let i = 0; i < this.wordObjectArray.length; i++) {
            stringOnScreen = stringOnScreen + this.wordObjectArray[i].printToScreen(guessedLetter) + " ";
        };
      //  console.log("stringOnScreen ", stringOnScreen);
      //  console.log(stringOnScreen);
        return stringOnScreen;
    };

    //takes a character as an argument and calls the check function on each letter object
    processCharacter(char){
        let guessRight = false;
        for (let i = 0; i < this.wordObjectArray.length; i++) {  
            let charCheckResult = this.wordObjectArray[i].charCheck(char);
            // console.log("check ", charCheckResult);
            // console.log("wordObjectArray ", this.wordObjectArray[i]); 
            if (charCheckResult) {guessRight = true;};
        };
        return guessRight;
    };

};

module.exports = Word;

// let output = new Word("name");
// output.processCharacter("z");
// output.processCharacter("a");
// output.processCharacter("m");
// output.outputString("m");
// output.outputString("e");


// console.log(output.processCharacter("z"));

// this.firstLetter = new Letter(this.wordArray[0], true);
// console.log("firstletter ", this.firstLetter);
// this.firstLetter.printToScreen("z");

// outputString(guessedLetter) {
//     let outputArray = this.wordObjectArray.map(function (elem) {
//         elem.printToScreen(guessedLetter);
//     });
//     console.log("outputArray ", outputArray);
// };
