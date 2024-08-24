import "./css/style.css";
import checkEmail from "./modules/email";
import checkCountry from "./modules/country";
import checkPostalCode from "./modules/postal-code";
import { checkPassword, confirmPassword } from "./modules/password";

checkEmail();
checkCountry();
checkPostalCode();
checkPassword();
confirmPassword();

const form = document.getElementById("myForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
// Email
// Country
// Postal Code
// Password
// Password Confirmation

// Think about how you would set up the different form elements and their accompanying validators.
// What objects and functions will you need ?
