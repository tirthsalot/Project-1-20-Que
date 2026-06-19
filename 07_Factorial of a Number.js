function findFactorial() {
    let num = Number(document.getElementById("number").value);

    if (num < 0) {
        document.getElementById("result").innerText =
            "Factorial is not defined for negative numbers";
        return;
    }

    let factorial = 1;

    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }

    document.getElementById("result").innerText =
        "Factorial of " + num + " is " + factorial;
}