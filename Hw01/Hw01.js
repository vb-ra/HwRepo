var item1 = 29.99;
var item2 = 49.99;
var item3 = 19.99;
var tax = 0.07;
//Shopping Cart Cost without Taxes
var sccwt = item1 + item2 + item3;
console.log("\n\nShopping Cart Cost without Taxes: $".concat(sccwt));
//Taxes Cost
var tc = sccwt * tax;
console.log("Taxes Cost: $".concat(tc));
//Shopping Cart Total Cost
console.log("Shopping Cart Total Cost: $".concat(sccwt + tc, "\n\n"));
