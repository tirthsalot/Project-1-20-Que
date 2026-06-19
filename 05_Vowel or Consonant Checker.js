function checkLetter() {
    let letter = document.getElementById("letter").value.toLowerCase();

    if (
        letter === "a" || 
        letter === "e" ||
        letter === "i" ||
        letter === "o" ||
        letter === "u"
    ) {
        document.getElementById("result").innerHTML =
            letter + " is a Vowel";
    } else {
        document.getElementById("result").innerHTML =
            letter + " is a Consonant";
    }
}