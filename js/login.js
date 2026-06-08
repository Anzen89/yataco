// script.js

const form = document.getElementById("loginForm");

const togglePassword =
document.getElementById("togglePassword");

const passwordInput =
document.getElementById("password");

togglePassword.addEventListener("click", () => {

  const type =
  passwordInput.getAttribute("type") === "password"
  ? "text"
  : "password";

  passwordInput.setAttribute("type", type);

});

form.addEventListener("submit", (e) => {

  e.preventDefault();

  const email =
  document.getElementById("email").value;

  const password = passwordInput.value;

  // VALIDACIÓN SIMPLE

  if(
    email === "admin@edu.pe"
    &&
    password === "123456"
  ){

    alert("Bienvenido al sistema");

    window.location.href = "../index.html";

  }else{

    alert("Credenciales incorrectas");

  }

});