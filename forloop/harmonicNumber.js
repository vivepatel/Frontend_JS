const num = parseInt(process.argv[2]);
 let sum=0;
for(let i=1;i<=num;i++)
{
    sum += 1/i;
}
console.log(sum);