const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("Enter array: "))

console.log(Number.isNaN(Number(userArray[0])) ? false:true)