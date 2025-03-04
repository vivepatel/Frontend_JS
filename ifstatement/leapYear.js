const year = parseInt(process.argv[2]);
if(year%4==0 && year%100!=0||year%400==0)
{
    console.log(year,"Is Lear Year");
}
else
{
    console.log(year,"Is Not a Leap Year");
}