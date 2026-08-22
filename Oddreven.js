// function isOddOrEven(number) {

//     if (number % 2 === 0) {
//         return "Even";
//     } else {
//         return "Odd";
//     }
// }

// let num = 11;
// let num1 = 10;

// let result = isOddOrEven(num);
// let result1 = isOddOrEven(num1);

// console.log("The number is:", result);
// console.log("The number is:", result1);

function isOddOrEven(number) {
    return number % 2 === 0 ? "Even" : "Odd"; //? ternary operator if else shorthand
}
console.log(isOddOrEven(11));