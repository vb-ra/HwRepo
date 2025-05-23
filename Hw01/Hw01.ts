const item1: number = 29.99;
const item2: number = 49.99;
const item3: number = 19.99;
const tax: number = 0.07;


//Shopping Cart Cost without Taxes
let sccwt: number = item1 + item2 + item3;
console.log(`

Shopping Cart Cost without Taxes: $${sccwt}`);

//Taxes Cost
let tc: number = sccwt * tax;
console.log(`Taxes Cost: $${tc}`);

//Shopping Cart Total Cost

console.log(`Shopping Cart Total Cost: $${sccwt + tc}

`);