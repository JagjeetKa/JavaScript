let greet=(user) =>

      `hello ${user}!! `;


console.log(greet('Jagjeet'))

let add=(num1,num2,num3) =>
num1+num2+num3

let result=add(4,6,7);
console.log(result)

let addition = (num1, num2) =>
{
    if (num1 >= 0 && num2>=0){
        console.log(num1 + num2);
    }
    else{
        console.log("One of those number is negative");
    }
}
addition(10, -20);