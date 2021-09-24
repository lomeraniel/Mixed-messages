const messages = [
    "Great things will happen today.",
    "You should have stayed in bed today!",
    "It might rain, make sure you won't shrink.",
    "You will meet someone important today."
];

function generateRandomMessage() {
    let i = Math.floor(Math.random() * 3);
    return messages[i];   
}

console.log(generateRandomMessage());