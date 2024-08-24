function checkPostalCode() {
  const postalCode = document.getElementById("postal-code");

  const constraint =
    /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;

  postalCode.addEventListener("input", () => {
    console.log(constraint.test(postalCode.value));
    if (constraint.test(postalCode.value)) {
      postalCode.setCustomValidity("");
    } else {
      postalCode.setCustomValidity("Only Canadian postal codes are accepted");
    }
  });
}

export default checkPostalCode;
