function checkEmail() {
  const email = document.getElementById("email");

  const constraint = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  email.addEventListener("input", () => {
    if (constraint.test(email.value)) {
      email.setCustomValidity("");
    } else {
      email.setCustomValidity("Please enter a valid email address");
    }
  });
}

export default checkEmail;

// if email does not match expected patter show red to make it invalid.
// when submit button is clicked, error message should be showed

//constraint validation is done either on the form itself or a single form element.
// constraint validation is done in the following ways:
// 1. checkValidity() returns bool OR reportValidity() which tells the user call on form element
// 2. checkValidity() returns bool OR reportValidity() call on form
// 3. submitting the form

// Calling checkValidity() is called statically validating the constraints,
// while calling reportValidity() or submitting the form is called interactively validating the constraints.
// click() method on a submit button instead
