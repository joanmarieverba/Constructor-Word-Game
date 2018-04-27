//Word.js should only require Letter.js
const Letter = require("./letter.js");

// When we use the 'extends' keyword in our class declation, this class inherits 
// the methods and properties from the class it extends 
class Word {

    constructor(word) {

        // New properties
        this.wordArray = word.split('');
        console.log(this.wordArray);
        this.firstLetter = new Letter(this.wordArray[0], true);
       console.log("firstletter ", this.firstLetter);
        this.firstLetter.printToScreen("z");

    };

    // New method  
    outputString(guessedLetter) {

        let outputArray = this.wordArray.map(function(elem){
            
            elem.printToScreen(guessedLetter);
        });
       console.log("outputArray ", outputArray);
    };

};

let output = new Word("name");
output.outputString();
