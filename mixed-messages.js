function generateRandomMessage() {
    let i = Math.floor(Math.random() * 3);
    
    switch (i) {
        case 0:
            return "Great things will happen today.";
            break;
        case 1:
            return "You should have stayed in bed today!";
            break;
        case 2: 
            return "It might rain, make sure you won't shrink.";
            break;
        case 3: 
            return "You will meet someone important today."; 
            break;
    }
}

console.log(generateRandomMessage());