const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("Enter array: "))

userArray.length > 3 ? console.log(userArray[2]):console.log(userArray[userArray.length - 1])