function calculate() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const resultsDiv = document.getElementById("results");

  if (isNaN(num1) || isNaN(num2)) {
    resultsDiv.innerHTML = "<p>Please enter valid numbers.</p>";
    return;
  }

  const addition = num1 + num2;
  const subtraction = num1 - num2;
  const multiplication = num1 * num2;
  const division = num2 !== 0 ? (num1 / num2).toFixed(2) : "Cannot divide by zero";

  resultsDiv.innerHTML = `
    <p><strong>Addition:</strong> ${addition}</p>
    <p><strong>Subtraction:</strong> ${subtraction}</p>
    <p><strong>Multiplication:</strong> ${multiplication}</p>
    <p><strong>Division:</strong> ${division}</p>
  `;
}