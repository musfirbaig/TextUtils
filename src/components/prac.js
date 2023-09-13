
let string1 = "my name is hamza";
let titleCaseWords = [];
let words = string1.split(" ");
// console.log(words);
words.forEach((word)=>{

    let titleCase = word[0].toUpperCase();

    for(let i=1; i<word.length; i++){
        titleCase += word[i];
    }
    titleCaseWords.push(titleCase);
})

titleCaseWords = titleCaseWords.join(" ");
// console.log(titleCaseWords);
