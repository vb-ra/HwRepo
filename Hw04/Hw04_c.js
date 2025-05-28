//Exercise 3: Functional programming applications
//Function to capitalize strings in an array
var inputArray = ["Hello", "stranger", "!"];
function capitalizeStrings(strings) {
    return strings.map(function (str) { return str.charAt(0).toUpperCase() + str.slice(1).toUpperCase(); });
}
var capitalizedVersion = capitalizeStrings(inputArray);
console.log("The capitalized string is: ".concat(capitalizedVersion)); // Se utilizó concatenacion con `
//Function to filter numbers between 50 and 75
var numbers = [49, 40, 50, 12, 60, 7600, 76, 75, 45, -60, 62, 58, 91];
function filterNumbersInRange(numbers) {
    return numbers.filter(function (num) { return num >= 50 && num <= 75; });
}
var filteredNumbers = filterNumbersInRange(numbers);
console.log("The filtered numbers are: ".concat(filteredNumbers)); // Se utilizó concatenacion con `
