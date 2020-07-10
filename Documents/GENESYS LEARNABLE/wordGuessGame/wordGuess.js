const RIGHT_WORD = "Peach";

var msg = document.getElementById('msg');
msg.innerHTML="<h1>WORD GUESSING GAME!</h1><p>Hello there!</p> <p>You are expected to guess a predefined word.You will be prompted to input a word until you get the right word.</p><p> Don't worry you'd get one hint each 3 trials, for the first 12 trials, after which you are on your own. Have fun!</p>"

alert("If the rules are understood, press OK to continue.");
var wordGuess = prompt("Input your first word: ");

var validate = function tryAgain(wordGuess) {
	    for (i=0;i<3;i++) {
		    if (wordGuess!=RIGHT_WORD) {
			    var wordGuess = prompt("Pls try again: ")
			}
		    else {
			 alert("That was correct. Nice go!");
	        }
	    }
	return wordGuess;
};

	validate(wordGuess);
	alert("HINT: The word is a color.");
	validate(wordGuess);		
	alert("HINT: It is also the name of a fruit.");
	validate(wordGuess);
    alert("LAST HINT: This word is associated with love.");

while (validate!=RIGHT_WORD) {
	validate(wordGuess);
}