let num=new Set();

num.add(3);
num.add(3);
num.add(4);
num.add("jagjeet")

console.log(num)

num.forEach(n =>
{
    console.log(n);
}
)

console.log(num.has(2))

//set is a collection of unique values and it dont have index values like arrays have