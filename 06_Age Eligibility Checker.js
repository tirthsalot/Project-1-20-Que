function checkAge() {
    let age = Number(document.getElementById("age").value);
    let result = "";

    if (age >= 60) {
        result = "Senior Citizen, Eligible to Vote and Drive";
    } 
    else if (age >= 18) {
        result = "Eligible to Vote and Drive";
    } 
    else {
        result = "Not Eligible to Vote or Drive";
    }

    document.getElementById("result").innerHTML = result;
}