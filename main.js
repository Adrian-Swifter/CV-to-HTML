if ($(".slider").length !== 0) {
  $(".slider").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    prevArrow: false,
    nextArrow: false,
  });
}

(function () {
  const form = document.getElementById("form");
  const firstName = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");
  const address = document.getElementById("address");
  const city = document.getElementById("city");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
  });

  function checkInputs() {
    // trim to remove the whitespaces
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const addressValue = address.value.trim();
    const cityValue = city.value.trim();

    if (firstNameValue === "") {
      setErrorFor(firstName, "First name can't be blank");
    } else {
      setSuccessFor(firstName);
    }

    if (lastNameValue === "") {
      setErrorFor(lastName, "Last name can't be blank");
    } else {
      setSuccessFor(lastName);
    }

    if (addressValue === "") {
      setErrorFor(address, "Last name can't be blank");
    } else {
      setSuccessFor(address);
    }

    if (cityValue === "") {
      setErrorFor(city, "Last name can't be blank");
    } else {
      setSuccessFor(city);
    }
  }

  function setErrorFor(input, message) {
    const fieldWrapper = input.parentElement;
    const errorMsg = fieldWrapper.querySelector(".error-msg");
    fieldWrapper.classList.add("error");
    errorMsg.innerText = message;
  }

  function setSuccessFor(input) {
    const fieldWrapper = input.parentElement;
    fieldWrapper.classList.add("success");
    fieldWrapper.classList.remove("error");
  }
})();
