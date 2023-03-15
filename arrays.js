// can hold multiple values into single variable name
let num=[1,2,3]
console.log(num)
console.log(num[0])
console.log(num.length)
num.push(9)
console.log(num)

//can use data of different type in single array variable

let data=['Jagjeet',6,{tech:'Js'},function(){
    console.log("Hii")
}]
console.log(data)
console.log(data[2])
data[3]();

let data1=[2,3,4,5]
data1.shift()
console.log(data1)
data1.unshift(2)
console.log(data1)
console.log(data1.splice(1))