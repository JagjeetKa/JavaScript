let alien={
    name : 'Jagjeet',
    tech :'Js',
laptop :{
    ram : 4,
    OS : 'WINDOWS',
    Brand : 'DELL'
}
}

//console.log(alien)

for(let key in alien.laptop)
{
    console.log(key,alien.laptop[key])
}