//Letter.js should not require any other files.

class Letter {
    // This is where the arguments to the class are declared
    constructor(correctLetter, guessTorF) {
        this.correctLetter = correctLetter;
        this.guessTorF = guessTorF;
    };
    // 
    printToScreen(guessedChar) {
        let outputChar;
        if (guessedChar === this.correctLetter) {
            outputChar = this.correctLetter;
        };
        if (this.guessTorF) {
            outputChar = this.correctLetter;
        };
        if (guessedChar !== this.correctLetter && this.guessTorF === false) {
            outputChar = "_";
        };
       // console.log("outputChar ", outputChar);
        return outputChar;
    };
    charCheck(guessedChar) {
        if (this.guessTorF) {
            return this.guessTorF;
        };
        if (this.guessTorF === false){
            if (guessedChar === this.correctLetter){
                this.guessTorF = true;
            } else {
                this.guessTorF = false;
            };  
        };
      //  console.log("this.guessTorF ", this.guessTorF);
        return this.guessTorF;
    };
};

// const nextLetter = new Letter("a", false);
// nextLetter.printToScreen("c");
// nextLetter.printToScreen("a");
// nextLetter.charCheck("z");
// nextLetter.charCheck("a");

module.exports = Letter;

