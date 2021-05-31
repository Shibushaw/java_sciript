let day = "Saturday";



if (day === "Monday"){
	console.log('7am');
}else if (day === "Tuesday" || day === "Wednesday" || day === "Thursday") {
	console.log("4am");
}else if (day === "Saturday" || day === "Sunday") {
	console.log("8am");
}else if (day === "Friday"){
	console.log("9am");
}else{
	console.log('Input error')
}