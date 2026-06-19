document.getElementById("form").addEventListener("submit", function(e){

    e.preventDefault();

    let balance = Number(document.getElementById("balance").value);
    let withdraw = Number(document.getElementById("withdraw").value);

    if(withdraw <= 0){
        document.getElementById("result").innerText =
        "Enter a valid withdrawal amount";
    }

    else if(withdraw > balance){
        document.getElementById("result").innerText =
        "Insufficient Balance";
    }

    else{
        let remainingBalance = balance - withdraw;

        document.getElementById("result").innerText =
        "Withdrawal Successful! Remaining Balance = ₹" + remainingBalance;
    }

});