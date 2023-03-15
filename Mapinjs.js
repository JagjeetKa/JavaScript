/*array-collection of values which have index
set-collection of values but we dont have index but can have unique values
map-collection of values where every value need to have key which is string,object*/

let map=new Map()

map.set('Jagjeet','JS');
map.set('nisha','RPA');
map.set('Jagjeet','Oracle')

console.log(map.keys());
console.log(map.has('jagjeet'))
console.log(map.get('Jagjeet'))


for(let [k,v] of map){
    console.log(k, ":",v)
}