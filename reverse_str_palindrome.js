let nameStr = "madam";
let splitVar = nameStr.split("");
let storeVar = "";

for (let i = splitVar.length - 1; i >= 0; i--) {
    storeVar = storeVar + splitVar[i];
}

console.log("Original String:", nameStr);
console.log("Reversed String:", storeVar);

if (nameStr === storeVar) {
    console.log("It is a palindrome");
} else {
    console.log("It is not a palindrome");
}