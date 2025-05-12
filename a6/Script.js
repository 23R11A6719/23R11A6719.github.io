 function greet() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const phone=document.getElementById("phone").value;

  const output = `Email: ${email}<br>Password: ${password}`;
  const output = `Email: ${email}<br>Password: ${password}<br>Phone no.: ${phone}`;
  document.getElementById("output").innerHTML = output;
}
