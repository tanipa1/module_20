function addNumbers(num1, num2){
    var add = num1 + num2;
    return add;
}

var result1 = addNumbers(1, 2);
var result2 = addNumbers(3, 4);
var finalresult = addNumbers(result1, result2);
console.log(finalresult);