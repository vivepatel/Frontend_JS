const num = parseInt(process.argv[2]);
let isprime = true;
if(num<2)
    console.log("Its Not a Prime Number");
else
{
    for(let i=2;i<=num/2;i++)
    {
        if(num%2==0)
        {
            isprime=false;
        }
    }
}
if(isprime)
    console.log("Is   Prime a Number");
else
   console.log("Is Not a Prime Number")