document.getElementById("form").addEventListener("submit", function(e){
  e.preventDefault();

  let price = Number(document.getElementById("price").value);
  let discount = Number(document.getElementById("discount").value);
  let result = document.getElementById("result");

  if(price <= 0){
    result.innerText = "Enter valid price!";
  }
  else if(discount < 0 || discount > 100){
    result.innerText = "Enter discount between 0 to 100!";
  }
  else{
    let discountAmount = (price * discount) / 100;
    let finalPrice = price - discountAmount;

    result.innerText =
      "Discount: ₹" + discountAmount +
      " | Final Price: ₹" + finalPrice;
  }
});