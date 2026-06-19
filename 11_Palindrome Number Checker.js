document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    let num = Number(document.getElementById("number").value);

    let original = num;
    let reverse = 0;

    while (num > 0) {
        let digit = num % 10;
        reverse = reverse * 10 + digit;
        num = Math.floor(num / 10);
    }

    if (original === reverse) {
        document.getElementById("result").innerText =
            original + " is a Palindrome Number";
    } else {
        document.getElementById("result").innerText =
            original + " is Not a Palindrome Number";
    }
});