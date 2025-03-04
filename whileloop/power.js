const prompt = require("prompt-sync")(); 


const num = parseInt(prompt("Enter the Number "));
let a=1;
while(a<=8)
{
    console.log(2**a);
    a++;
    
}