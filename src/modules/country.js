function checkCountry() {
  const country = document.getElementById("country");

  country.addEventListener("input", () => {
    if (country.value.length < 2) {
      country.setCustomValidity(
        "Country name must be at least 2 characters long",
      );
    } else {
      country.setCustomValidity("");
    }
  });
}

export default checkCountry;
