/*let nums=[10,20,30,40,50];

nums.forEach((n)    =>
{ 
    console.log(n*2)
})*/
//array filter,map,reduce method//

/*let nums=[10,25,35,40,50];

nums.filter(n => n%2===0)
.map(n => n*2)
.forEach((n) => {
    console.log(n)
})*/

let nums=[10,25,35,40,50];

let result=nums.filter(n => n%2===0)
.map(n => n*2)
.reduce((a,b) => a+b)
console.log(result)