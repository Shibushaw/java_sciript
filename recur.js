let x = 4;
let result = 1;
while (x > 0) {
    if (x == 0 || x == 1){
        break;
    }
    else{
    result = result * x;
    x--;
}
}
console.log(result);

let currentValue = 4;
let factorial = 1;

while (currentValue > 1){
    factorial = factorial * currentValue
    currentValue --;
}
console.log(factorial);