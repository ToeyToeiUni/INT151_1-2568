function getFreqOfWords(sentence) {
    if(sentence === null || sentence === undefined) {
        return undefined;
    } else {
        const wordCount = {};
        const wordArray = sentence.toLowerCase().split(' ');
        for(let word of wordArray) {
            if(wordCount[word]) {
                wordCount[word]++;
            } else {
                wordCount[word] = 1;
            }
        }
        return wordCount;
    }
}

console.log(getFreqOfWords('Today is present and present is your gift'));
console.log(getFreqOfWords('Do you best just do it'));
console.log(getFreqOfWords(null));
console.log(getFreqOfWords(undefined));