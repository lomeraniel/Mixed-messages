const messages = [
    ["Great things", " will happen", " today."],
    ["You", " should have stayed", " in bed today!"],
    ["It", " might rain", ", make sure you won't shrink."],
    ["You", " will meet someone important", " today."]
];

function generateRandomMessage() {
    let endSentence = [];
    // message number from the list
    let i;
    // Buils the message taking the 3 pieces from the array.
    for (let j = 0; j < messages[1].length ; j++) {
        i = Math.floor(Math.random() * 3);
        //console.log(j+ ", " +i);
        //console.log(messages[i][j]);
        endSentence.push(messages[i][j]);
    }
    return endSentence.join("");   
}

console.log(generateRandomMessage());