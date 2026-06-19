document.getElementById("form").addEventListener("submit", function(e){

    e.preventDefault();

    let weight = Number(document.getElementById("weight").value);

    let height = Number(document.getElementById("height").value);

    height = height / 100;

    let bmi = weight / (height * height);

    let message = "";

    if(bmi < 18.5){
        message = "Underweight";
    }
    else if(bmi >= 18.5 && bmi < 25){
        message = "Normal Weight";
    }
    else if(bmi >= 25 && bmi < 30){
        message = "Overweight";
    }
    else{
        message = "Obese";
    }

    document.getElementById("result").innerHTML =
    `Your BMI is <b>${bmi.toFixed(2)}</b><br>${message}`;

});