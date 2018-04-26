//Word.js should only require Letter.js
const Letter = require("./letter.js");

// When we use the 'extends' keyword in our class declation, this class inherits 
// the methods and properties from the class it extends 
class Word extends Letter {

    constructor(word, correctLetter, guessedLetter) {
        // This super() allows us to access the class we are extending
        super();
        this.correctLetter = correctLetter;
        this.guessTorF = false;

        // New properties
        this.wordArray = word.split('');
        this.guessedLetter = guessedLetter;
    };

    // New method  
    outputString() {
        let outputArray = this.wordArray.map(function(elem){
            this.printToScreen(elem);
        });
       console.log("outputArray ", outputArray);
    };

};

let output = new Word("name", "a", "b");
output.outputString();
