document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();

    let temp = document.getElementById("temperature").value;
    let type = document.getElementById("type").value;
    let result = document.getElementById("result");

    if(temp === "" || type === ""){
        result.innerHTML = "Please enter value and select type!";
        return;
    }

    let answer;

    if(type === "CtoF"){
        answer = (temp * 9/5) + 32;
        result.innerHTML = `${temp} °C = ${answer.toFixed(2)} °F`;
    }
    else{
        answer = (temp - 32) * 5/9;
        result.innerHTML = `${temp} °F = ${answer.toFixed(2)} °C`;
    }
});