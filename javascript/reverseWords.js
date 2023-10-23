// Without Inbuild Methods

function reverseWords(sentence) {
  let reversedSentence = "";
  let word = "";
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      for (let j = word.length - 1; j >= 0; j--) {
        reversedSentence += word[j];
      }
      reversedSentence += " ";
      word = "";
    } else {
      word += sentence[i];
    }
  }
  for (let j = word.length - 1; j >= 0; j--) {
    reversedSentence += word[j];
  }
  return reversedSentence;
}

const inputSentence = "This is a sunny day";
const reversedSentence = reverseWords(inputSentence);
console.log(reversedSentence);

// With Inbuild Methods

function reverseWords(sentence) {
  const words = sentence.split(" ");
  const reverseWords = words.map((word) => {
    return word.split("").reverse().join("");
  });
  return reverseWords.join(" ");
}

const promptSentence = prompt("Enter a sentence:");
const reverseSentence = reverseWords(inputSentence);
console.log(reversedSentence);
