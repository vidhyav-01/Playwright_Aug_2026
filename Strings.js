function lastWordLength(s) {

    let words = s.split(" ");

    let lastWord = words[words.length - 1];

    return lastWord.length;
}

console.log(lastWordLength("Hello World"));