/*let alien=
{
    name : 'Jagjeet',
    tech : 'JS'
}

//console.log(alien)
console.log(alien['name'])
console.log(alien['tech'])*/

let alien={
    name:'Jagjeet',
    tech:'JS',
    laptop : {
        ram : 4,
        OS :'Windows',
        brand : 'ASUS'

    }
}
delete alien.laptop.brand
/*console.log(alien)
console.log(alien.laptop)
console.log(alien.laptop.brand)
console.log(alien.laptop.brand.length)
console.log(alien.laptop.brand1?.length)*/
console.log(alien)