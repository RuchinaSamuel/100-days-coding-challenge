
const toggle = document.getElementById("langToggle");
const dropDown = document.getElementById("langDropDown");
const select = document.getElementById("selectLang");

toggle.addEventListener("click", () => {
  dropDown.classList.toggle("hidden");
});

dropDown.querySelectorAll("li").forEach((items) => {
  items.addEventListener("click", function () {
    select.textContent = items.textContent;
    dropDown.classList.add("hidden");
  });
});

document.addEventListener("click", (e) => {
  if (!toggle.contains(e.target) && !dropDown.contains(e.target)) {
    dropDown.classList.add("hidden");
  }
});

const logInBtn = document.getElementById("logIn");
const togglePassword = document.getElementById("togglePassword");
const logIn = document.getElementById("logIn");
togglePassword.addEventListener("click", () => {
  const Icon = togglePassword.querySelector("i");

  if (password.type === "password") {
    password.type = "text";
    Icon.classList.remove("fa-eye");
    Icon.classList.add("fa-eye-slash");
  } else {
    password.type = "password";
    Icon.classList.remove("fa-eye-slash");
    Icon.classList.add("fa-eye");
  }
});

logInBtn.addEventListener("click", function () {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const emailRegax = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let passwordRegax =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{2,20}$/;

  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  emailError.textContent = "";
  passwordError.textContent = "";
  let errorMessage = false;

  if (!password) {
    passwordError.textContent = "Password is required";
  } else if (!passwordRegax.test(password)) {
    passwordError.textContent = "Please enter a valid password";
    errorMessage = true;
  }

  if (!email) {
    emailError.textContent = "Email is required";
  } else if (!emailRegax.test(email)) {
    emailError.textContent = "Please enter a valid email";
    errorMessage = true;
  }

  if (!errorMessage) {
    window.location.href = "trouble.html";
  }
});
// window.location.href = "trouble.html";
// alert("Thank you for trying to login, we go talk later")