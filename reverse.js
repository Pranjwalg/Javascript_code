function reverseWords(sentence) {
    return sentence.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}

let inputSentence = "This is a sunny day";
let reversedSentence = reverseWords(inputSentence);
console.log(reversedSentence); 
