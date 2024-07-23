// Take any string with minimum 20 characters. Count number of consonant and vowel in the string.
let str = "world of technology, innovation drives progress and shapes our future.";
let vowels = "AEIOUaeiou";
let vowel = 0;
let consonant = 0;
for (let char of str) {
    if (vowels.includes(char)) {
        vowel++;
    } else if (char.match(/[a-zA-Z]/)) {
        consonant++;
    }
}
console.log(`The Vowels in String is ${vowel}`);
console.log(`The number of consonant is ${consonant}`);