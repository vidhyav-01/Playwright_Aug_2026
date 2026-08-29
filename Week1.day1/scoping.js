// 1. Global variable
var genderType = "female";
function printGender() {
  // 3. Function-scoped variable using let
  let color = "brown";
  console.log("Function scope color:", color);
  // 4. If condition
  if (genderType.startsWith("female")) {
    // 5a. var inside block → function-scoped
    var age = 30;
    // 5b. let inside block → block-scoped
    let color = "pink";
    console.log("Inside if-block color:", color); // prints "pink"
  }
  // 6. Outside if-block but inside function
  console.log("Outside if-block age:", age); // accessible because var is function-scoped
  console.log("Outside if-block color:", color); // prints "brown"
}
// 7. Call the function
printGender();
// 7b. Print global variable
console.log("Global genderType:", genderType);
// 8. Change global variable
genderType = "male";
console.log("Global genderType after change:", genderType);
// Call again to observe behavior with new global value
printGender();
