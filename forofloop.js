let nums=[];
nums[0]=5;
nums[99]=99;

console.log(nums);

/*for(let i of nums){
    console.log(i)
}*/

for(let key in nums){
    console.log(nums[key])
}