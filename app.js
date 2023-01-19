//INSULT GENERATOR

//Pick random word
function pickRandomWord(words) {
    return words[Math.floor(Math.random() * words.length)];
}

//Produce random insult
function generateRandomInsult() {
    let randomBodyPart = ['face', 'nose', 'hair'];
    let randomAdjective = ['smelly', 'boring', 'stupid', 'dumb'];
    let randomWord = ['Fly', 'Moose', 'Stick', 'Monkey', 'Marmot', 'Marmot'];

    let randomString = 'Your ' + pickRandomWord(randomBodyPart) + ' is like a ' + pickRandomWord(randomAdjective) + ' ' + pickRandomWord(randomWord) + '!';

    console.log(randomString);
}