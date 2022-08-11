function Calculate() {
  let costPrice = document.querySelector(".costPrice").value;
  let sellingPrice = document.querySelector(".sellingPrice").value;

  let profitOrLoss = document.querySelector(".profitLoss");
  let profitLossPercentage = document.querySelector(".profitLossPercentage");
  let nothing = document.querySelector(".nothing");

  profitOrLoss.innerHTML = `GH₵ 0.00`;
  profitLossPercentage.innerHTML = `%`;
  nothing.innerHTML = "";

  if (costPrice == "" || sellingPrice == "") {
    profitOrLoss.innerHTML = `GH₵ 0.00`;
    profitLossPercentage.innerHTML = `%`;
    alert("Please fill in all fields");
    nothing.innerHTML = "Nothing to display";
  }

  sellingPrice = parseFloat(sellingPrice);
  costPrice = parseFloat(costPrice);

  if (sellingPrice > costPrice) {
    const profit = sellingPrice - costPrice;
    const profitPercentage = (profit / costPrice) * 100;
    profitOrLoss.innerHTML = `You have made a profit of: GH₵ ${profit.toFixed(
      2
    )}`;
    profitLossPercentage.innerHTML = `Your profit percentage is:  ${profitPercentage.toFixed(
      2
    )}%`;
  }
  if (costPrice > sellingPrice) {
    const loss = costPrice - sellingPrice;
    const lossPercentage = ((loss / costPrice) * 100).toFixed(2);
    profitOrLoss.innerHTML = `GH₵ ${loss.toFixed(2)}`;
    profitLossPercentage.innerHTML = `${lossPercentage}%`;
  }

  if (costPrice === sellingPrice) {
    profitOrLoss.innerHTML = `GH₵ 0.00`;
    profitLossPercentage.innerHTML = `%`;
    nothing.innerHTML = "You have broken even";
  }
}

function Clear() {
  let costPrice = document.querySelector(".costPrice");
  let sellingPrice = document.querySelector(".sellingPrice");
  let profitOrLoss = document.querySelector(".profitLoss");
  let profitLossPercentage = document.querySelector(".profitLossPercentage");
  let nothing = document.querySelector(".nothing");
  costPrice.value = "";
  sellingPrice.value = "";
  profitOrLoss.innerHTML = `GH₵ 0.00`;
  profitLossPercentage.innerHTML = `%`;
  nothing.innerHTML = "";
}
