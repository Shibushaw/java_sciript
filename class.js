//classes


class shibu{
	//variables creation
	constructor(name,age) {
		this.name = name;
		this.age = age;

	}
	//methods creation
	get_name(){
		return this.name;
	}
	get_age(){
		return this.age;
	}
}


const sh = new shibu("Shibu",22);

console.log(sh.get_name());
console.log(sh.get_age());
console.log(sh.name)