function checkLeapYear() {
    let year = Number(document.getElementById("year").value);

    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        document.getElementById("result").innerHTML =
            year + " is a Leap Year";
    } else {
        document.getElementById("result").innerHTML =
            year + " is Not a Leap Year";
    }
}