const prompt = require("prompt-sync")(); // Import prompt-sync for user input

console.log("Select conversion option:");
console.log("1. Feet to Inch");
console.log("2. Feet to Meter");
console.log("3. Inch to Feet");
console.log("4. Meter to Feet");

const choice = parseInt(prompt("Enter your choice (1-4): "));
const value = parseFloat(prompt("Enter the value to convert: "));

switch (choice) {
    case 1:
        console.log(`${value} Feet = ${value * 12} Inches`);
        break;
    case 2:
        console.log(`${value} Feet = ${(value * 0.3048).toFixed(4)} Meters`);
        break;
    case 3:
        console.log(`${value} Inches = ${(value / 12).toFixed(4)} Feet`);
        break;
    case 4:
        console.log(`${value} Meters = ${(value / 0.3048).toFixed(4)} Feet`);
        break;
    default:
        console.log("Invalid choice! Please enter a number between 1 and 4.");
}
