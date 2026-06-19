function checkEvenOdd() {
    let num = document.getElementById("number").value;

    if (num === "") {
        document.getElementById("result").innerText = "Please enter a number";
        return;
    }

    num = Number(num);

    if (num % 2 === 0) {
        document.getElementById("result").innerText = num + " is Even";
    } else {
        document.getElementById("result").innerText = num + " is Odd";
    }
}