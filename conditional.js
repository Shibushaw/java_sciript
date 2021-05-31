//conditional operatores


const a = 20;

if (a < 10){
	console.log("a is less than 10");

}else if (a === 10) {
	console.log("a is equal to 10");

}else{
	console.log("A is greater than 10");
}


// and or not && ||

const b = 20;

if (a => 10 || b > 10){
	console.log('one is larger')
}else if (a === b) {
	console.log("both are equal ")
}
else {
	console.log('both are equal ')
}



//ternary operator ? if :else



const x = 1;
const value = x > 10 ? 'green' : 'blue' ;

console.log(value)




//switch case


switch (value) {
	case 'blue':
		console.log(`${value}`);
		break;
	case 'green':
		console.log(`${value}`);
		break;
	default:
		console.log("Got nothing")
		break;
}