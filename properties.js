var shoppingCart ={
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}

var penCount = shoppingCart.pen;
console.log(shoppingCart);

// object er properties dekhai
var properties = Object.keys(shoppingCart);
var propertiesValue = Object.values(shoppingCart);
console.log(properties);
console.log(propertiesValue);

// set value
shoppingCart.mouse = 15;
console.log(shoppingCart);

var smartphone = { brand: "iPhone", model: "13" };