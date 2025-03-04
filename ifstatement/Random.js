let a= Math.floor(Math.random()*900+100);
let b= Math.floor(Math.random()*900+100);
let c= Math.floor(Math.random()*900+100);
let d =Math.floor(Math.random()*900+100);
let e =Math.floor(Math.random()*900+100);
console.log("The Random Numbers are:",a,b,c,d,e);
let max = a;
if (b > max) max = b;
if (c > max) max = c;
if (d > max) max = d;
if (e > max) max = e;

let min = a;
if (b < min) min = b;
if (c < min) min = c;
if (d < min) min = d;
if (e < min) min = e;
console.log("The Maximum Number is :", max);
console.log("The Minimum Number is :", min);