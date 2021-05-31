//method one using constructor
function sam (first_name,last_name) {
	//variables
	this.first_name = first_name;
	this.last_name = last_name;

	// properties methods
	this.fullname = function() {
		return this.first_name + this.last_name;
	}
}

// protype creation

sam.prototype.last_frst = function() {
	return this.last_name + this.first_name;
};

//instamce
const sam_1 = new sam("shibu","shaw");

console.log(sam_1.fullname());
console.log(sam_1.first_name);
c

