const prompt = require("prompt-sync")(); 


const num = parseInt(prompt("Enter the Number "));
let sum=1;
for(let i=1;i<=num;i++)
{
  sum = sum * i;
}
console.log(sum);
