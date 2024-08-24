function checkPassword() {
  const password = document.getElementById("password");

  password.addEventListener("input", () => {
    if (password.value.length < 8) {
      password.setCustomValidity("Password must be longer than 8 characters");
    } else {
      password.setCustomValidity("");
    }
  });
}

function confirmPassword() {
  const passwordConfirmation = document.getElementById("password-confirmation");
  const password = document.getElementById("password");

  passwordConfirmation.addEventListener("input", () => {
    if (passwordConfirmation.value != password.value) {
      passwordConfirmation.setCustomValidity(
        "Password confirmation is incorrect",
      );
    } else {
      passwordConfirmation.setCustomValidity("");
    }
  });

  password.addEventListener("input", () => {
    if (passwordConfirmation.value != password.value) {
      passwordConfirmation.setCustomValidity(
        "Password confirmation is incorrect",
      );
    } else {
      passwordConfirmation.setCustomValidity("");
    }
  });
}

export { checkPassword, confirmPassword };
