function sum(num1, num2){
    // console.log(num1, '+', num2);
    var sum = num1 + num2;
    return sum;
}

var total = sum(12, 12);
// console.log('total', total);



function bringSingara(money){
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}

var singaras = bringSingara(200);
console.log('Eating Sigara:', singaras);