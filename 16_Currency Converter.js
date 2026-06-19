document.getElementById("form").addEventListener("submit", function(e){

    e.preventDefault();

    let amount = Number(document.getElementById("amount").value);

    let currency = document.getElementById("currency").value;

    let result = "";

    if(currency === "usd"){

        result = (amount / 86).toFixed(2);

        document.getElementById("result").innerHTML =
        `₹${amount} = <span>$${result} USD</span>`;

    }

    else if(currency === "eur"){

        result = (amount / 99).toFixed(2);

        document.getElementById("result").innerHTML =
        `₹${amount} = <span>€${result} EUR</span>`;

    }

    else{

        result = (amount / 115).toFixed(2);

        document.getElementById("result").innerHTML =
        `₹${amount} = <span>£${result} GBP</span>`;

    }

});