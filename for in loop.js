let alien = {
	name:'shibu',
	age:20,
	laptop:{
		cpu : 'i3',
		ram : 4,
		brand : 'asus'
	}
}


for (let key in alien.laptop){
	console.log(key, alien.laptop[key]);
}

//shibu