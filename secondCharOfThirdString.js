const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("Enter array: "))

typeof userArray[0] === "string" && userArray[3].length >= 2 ? console.log(userArray[3][1]):console.log("Error: first item is either not a string or not long enough")