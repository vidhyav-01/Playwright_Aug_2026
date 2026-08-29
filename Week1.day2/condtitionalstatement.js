function launchBrowser(browserName) {

    if (browserName === "chrome") {
        console.log("Launching Chrome browser");
    } else {
        console.log("Launching other browser");
    }
}


function runTests(testType) {

    switch (testType) {

        case "smoke":
            console.log("Running Smoke Tests");
            break;

        case "sanity":
            console.log("Running Sanity Tests");
            break;

        case "regression":
            console.log("Running Regression Tests");
            break;

        default:
            console.log("Running Smoke Tests");
            break;
    }
}


launchBrowser("chrome");

runTests("regression");