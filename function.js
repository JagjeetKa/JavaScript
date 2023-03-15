/*function greet()
{
    console.log("Hello world")
}

greet();
greet();
console.log("Hii")
greet();
greet();*/

//function return and passing value to it

/*function greet(user)
{
    return  `hello ${user}!! `;
}

let user='Jagjeet'
let str=greet(user);
console.log(str);


let add=function(num1,num2){
    return num1 + num2;
}

let result=add(5,7);
console.log(result);*/

//local global variable 


function greetings(u)//local
{

    return `Hello ${u}!!`
}
let user='Jagjeet Kaur';//global
let str=greetings(user)
console.log(str)

let add=function(num1,num2,num3=1)
{
    return num1+num2+num3
}
let result=add(4,5)

console.log(result)
