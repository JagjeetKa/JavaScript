let num=[5,6,7,8,9];

let [a,b,c,d] =num;
console.log(d);

let i=5;
let j=8;

[i,j]=[j,i]
console.log(i,j)

let string="My name is jagjeet and i am learning javascript".split(' ');
let [k,l,m,...n]=string;
console.log(n)