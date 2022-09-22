const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("Enter array: "))

console.log(userArray[userArray.length - 1])