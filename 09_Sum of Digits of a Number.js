document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();

    let num = Number(document.getElementById("number").value);

    let sum = 0;
    let temp = num;

    while (temp > 0) {
        sum += temp % 10;
        temp = Math.floor(temp / 10);
    }

    document.getElementById("result").innerText =
        "Sum of Digits of " + num + " = " + sum;
});