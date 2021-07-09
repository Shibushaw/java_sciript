var person=[

//objects are key value pair 
{
	id:1,
	name:'shibu',
	isCompleted:true
},
{
	id:2,
	name:'shaw',
	isCompleted:true
},
{
	id:3,
	name:'ghost',
	isCompleted:false
}


];

//for loop

/*

for (let i = 0; i < person.length; i++){
	console.log(person)
};

//for each
person.forEach(function(i){
	console.log(i.id)
});

//map returns a values so it is stored in a variable

const map_fuc = person.map(function(i){
         return (i.name)
});
console.log(map_fuc)


//filter

const filter_fun = person.filter(function(i){
	return i.isCompleted === true;
}).map(function(i){
	return i.name;
});

console.log(filter_fun);
*/

for (let j  in person){
	console.log(person[j])
};