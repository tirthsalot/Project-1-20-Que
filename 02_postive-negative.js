document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const number = Number(document.getElementById("number").value);
  const result = document.getElementById("result");
  
  if (number > 0) {
    result.textContent = "The number is positive";
    result.style.color = "purple";
    
  } else if (number < 0) {
    result.textContent = "The number is negative";
    result.style.color = "red";
    
  } else {
    result.textContent = "The number is zero";
    result.style.color = "orange";
  }
});