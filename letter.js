//Letter.js should not require any other files.

class Letter {
    // This is where the arguments to the class are declared
    constructor(correctLetter, guessTorF) {
        this.correctLetter = correctLetter;
        this.guessTorF = guessTorF;
    };
    // 
    printToScreen(guessedChar) {
        if (guessedChar !== this.correctLetter) {
            guessedChar = "_";
        };
        // console.log(guessedChar);
        return guessedChar;
    };
    charCheck(guessedChar) {
        if (guessedChar === this.correctLetter){
            this.guessTorF = true;
        } else {
            this.guessTorF = false;
        };  
        // console.log("this.guessTorF ", this.guessTorF);
        return this.guessTorF;
    };
};

const nextLetter = new Letter("a", true);
// nextLetter.printToScreen("c");
// nextLetter.printToScreen("a");
nextLetter.charCheck("z");
nextLetter.charCheck("a");

module.exports = Letter;

