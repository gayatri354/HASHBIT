// Write a function to replace wrong word with correct word in any sentance.
// Like this - correctfn(string, wrong, correct)
// Use string.replace in function
function correctfn(sentence, wrong, correct) {
    let regex = new RegExp("\\b" + wrong + "\\b", "gi");
    let correctedSentence = sentence.replace(regex, correct);
    return correctedSentence;
}
let originalSentence =
    "By staying informed and engaged with emerging trends";
let wrongWord = "staying";
let correctWord = "keeping";
let correctedSentence = correctfn(originalSentence, wrongWord, correctWord);
console.log(correctedSentence);