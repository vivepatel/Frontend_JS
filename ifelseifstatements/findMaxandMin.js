const a = parseInt(process.argv[2]);
const b = parseInt(process.argv[3]);
const c = parseInt(process.argv[4]);
let opt1 = a + b *c;
let opt2 = a % b +c;
let opt3 = c + a/b;
let opt4 = a * b +c;
let min=opt1
if(opt2<min)min=opt2;
if(opt3<min)min=opt3;
if(opt4<min)min=opt4;
let max=opt1
if(opt2>max)max=opt2;
if(opt3>max)max=opt3;
if(opt4>max)max=opt4;
console.log("The output of The Following 4 Operation are",opt1,opt2,opt3,opt4);
console.log("The Maximum is ", max, " The Minimum is ",min);