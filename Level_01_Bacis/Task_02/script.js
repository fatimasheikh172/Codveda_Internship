function togglePassword() {
    const passwordField = document.getElementById("password");
    const toggleBtn = document.querySelector(".toggle-password");
  
    if (passwordField.type === "password") {
      passwordField.type = "text";
      toggleBtn.textContent = "Hide";
    } else {
      passwordField.type = "password";
      toggleBtn.textContent = "Show";
    }
  }
  
  const form = document.getElementById("animatedForm");
  
  form.addEventListener("submit", function (e) {
    e.preventDefault();
  
    let valid = true;
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
  
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const passwordError = document.getElementById("passwordError");
    const successMessage = document.getElementById("successMessage");
  
    [nameError, emailError, phoneError, passwordError].forEach(el => el.style.display = "none");
    successMessage.innerText = "";
  
    if (name === "") {
      nameError.style.display = "block";
      valid = false;
    }
  
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email)) {
      emailError.style.display = "block";
      valid = false;
    }
  
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
      phoneError.style.display = "block";
      valid = false;
    }
  
    if (password.length < 6) {
      passwordError.style.display = "block";
      valid = false;
    }
  
    if (valid) {
      successMessage.innerText = "✅ Registration successful!";
      form.reset();
      document.querySelector(".toggle-password").textContent = "Show";
      document.getElementById("password").type = "password";
    }
  });
  