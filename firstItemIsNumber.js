const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("Enter array: "))

console.log(isNaN(userArray[0]) ? false:true)