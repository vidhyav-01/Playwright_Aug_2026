function calculateSum(n) {

    let sum = 0;

    for (let i = 1; i <= n; i++) {

        sum = sum + i;

        console.log(i, sum);
    }

    return sum;
}

let n = 5;

console.log("Final Sum:", calculateSum(n));