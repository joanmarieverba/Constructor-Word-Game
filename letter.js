//Letter.js should not require any other files.

class Letter {
    // This is where the arguments to the class are declared
    constructor(correctLetter, guessTorF) {
        this.correctLetter = correctLetter;
        this.guessTorF = guessTorF;
    };
    // 
    printToScreen(guessedChar) {
        let outputChar = " ";
        if (guessedChar.toLowerCase() === this.correctLetter || guessedChar.toUpperCase() === this.correctLetter) {
            outputChar = this.correctLetter;
        } else if (this.guessTorF) {
            outputChar = this.correctLetter;
        } else if (guessedChar !== this.correctLetter && this.guessTorF === false) {
            outputChar = "_";
        };
        return outputChar;
    };
    charCheck(guessedChar) {
        let currentGuess = false;
        if (guessedChar.toLowerCase() === this.correctLetter || guessedChar.toUpperCase() === this.correctLetter){
                this.guessTorF = true; 
                currentGuess = true;
        };
        return currentGuess;
    };
};

// const nextLetter = new Letter("a", false);
// nextLetter.printToScreen("c");
// nextLetter.printToScreen("a");
// nextLetter.charCheck("z");
// nextLetter.charCheck("a");

module.exports = Letter;

