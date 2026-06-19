document.getElementById("form").addEventListener("submit", function(e){

    e.preventDefault();

    let age = Number(document.getElementById("age").value);

    let price = 0;
    let message = "";

    if(age < 5){
        price = 0;
        message = "Free Ticket 🎉";
    }
    else if(age <= 12){
        price = 120;
        message = "Child Ticket 👦";
    }
    else if(age <= 59){
        price = 250;
        message = "Adult Ticket 🧑";
    }
    else{
        price = 150;
        message = "Senior Citizen Ticket 👴";
    }

    document.getElementById("result").innerHTML =
    `
    ${message}<br><br>
    Ticket Price : <b>₹${price}</b>
    `;

});