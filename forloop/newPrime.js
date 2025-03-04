const prompt = require("prompt-sync")(); 


const start = parseInt(prompt("Enter the start of the range: "));
const end = parseInt(prompt("Enter the end of the range: "));

console.log(`Prime numbers between ${start} and ${end}:`);

for (let num = start; num <= end; num++) {
    let isPrime = true;

    if (num < 2) isPrime = false; 

    for (let i = 2; i * i <= num; i++) { 
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) process.stdout.write(num + " "); 
}

console.log(); 
