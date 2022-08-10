const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height))
    results.innerHTML = "Please enter a valid height";
  else if (weight === "" || weight < 0 || isNaN(weight))
    results.innerHTML = "Please enter a valid weight";
  else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    results.innerHTML = `<span>${bmi}</span>`;
    console.log(bmi);
  }
});
// pick the bmi and display a message based on the value if it is below 18.5, 18.5 - 24.9, or above 25
// if the value is above 25, display a message saying you are overweight
// if the value is below 18.5, display a message saying you are underweight
// if the value is between 18.5 and 24.9, display a message saying you are normal weight
// if the value is not a number, display a message saying you must enter a number


