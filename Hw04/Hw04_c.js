/*
//Function to capitalize strings in an array
const inputArray = ["Hello", "stranger", "!"];

function capitalizeStrings(strings: string[]): string[] {
    return strings.map(str => str.charAt(0).toUpperCase() + str.slice(1).toUpperCase());
}

const capitalizedVersion = capitalizeStrings(inputArray);

console.log(capitalizedVersion);
 */
//Function to filter numbers between 50 and 75
var numbers = [49, 40, 50, 12, 60, 7600, 76, 75, 45, -60, 62, 58, 91];
function filterNumbersInRange(numbers) {
    return numbers.filter(function (num) { return num >= 50 && num <= 75; });
}
var filteredNumbers = filterNumbersInRange(numbers);
console.log(filteredNumbers);
