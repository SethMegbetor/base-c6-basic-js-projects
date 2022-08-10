function addition() {
  const n1 = parseFloat(document.getElementById('n1').value);
const n2 = parseFloat(document.getElementById('n2').value);
const add = (n1 + n2);
document.getElementById('result').innerHTML = add;
}