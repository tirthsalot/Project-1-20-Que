function generateTable() {

    let num = Number(document.getElementById("number").value);

    let table = "";

    for(let i = 1; i <= 10; i++) {
        table += num + " × " + i + " = " + (num * i) + "<br>";
    }

    document.getElementById("result").innerHTML = table;
}