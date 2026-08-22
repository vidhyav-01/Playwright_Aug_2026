function checkNumber(number) {

    if (number > 0) {
        return "Positive";
    } 
    else if (number < 0) {
        return "Negative";
    } 
    else {
        return "Zero";
    }
}

let num = -11;
let result = checkNumber(num);
console.log("The number is:", result);