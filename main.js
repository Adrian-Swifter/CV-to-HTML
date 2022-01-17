// TASK 3 SLIDER
if ($(".slider").length !== 0) {
  $(".slider").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    prevArrow: false,
    nextArrow: false,
  });
}

// TASK 2 FORM VALIDATION
(function () {
  const form = document.getElementById("form");
  const firstName = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");
  const maleGender = document.getElementById("male");
  const femaleGender = document.getElementById("female");
  const birthYear = document.getElementById("birth-year");
  const address = document.getElementById("address");
  const city = document.getElementById("city");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
  });

  function checkInputs() {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const birthYearValue = birthYear.value;
    const addressValue = address.value.trim();
    const cityValue = city.value.trim();

    const regex = new RegExp("^[a-zA-Z0-9]");

    if (firstNameValue === "") {
      setErrorFor(firstName, "First name can't be blank");
    } else if (!regex.test(firstNameValue)) {
      setErrorFor(firstName, "Special characters aren't allowed");
    } else {
      setSuccessFor(firstName);
    }

    if (lastNameValue === "") {
      setErrorFor(lastName, "Last name can't be blank");
    } else if (!regex.test(lastNameValue)) {
      setErrorFor(firstName, "Special characters aren't allowed");
    } else {
      setSuccessFor(lastName);
    }

    if (maleGender.checked === false && femaleGender.checked === false) {
      setErrorFor(maleGender, "Please select your gender");
    } else if (maleGender.checked === true && femaleGender.checked === true) {
      setErrorFor(femaleGender, "Please select either male or female gender");
    } else {
      setSuccessFor(maleGender.parentElement);
    }

    if (birthYearValue === "") {
      setErrorFor(birthYear, "Please choose your year of birth.");
    } else {
      setSuccessFor(birthYear);
    }

    if (addressValue === "") {
      setErrorFor(address, "Address field can't be blank");
    } else if (!regex.test(addressValue)) {
      setErrorFor(firstName, "Special characters aren't allowed");
    } else {
      setSuccessFor(address);
    }

    if (cityValue === "") {
      setErrorFor(city, "City name can't be blank");
    } else if (!regex.test(cityValue)) {
      setErrorFor(firstName, "Special characters aren't allowed");
    } else {
      setSuccessFor(city);
    }

    console.log(birthYear.value);
  }

  function setErrorFor(input, message) {
    let fieldWrapper = input.parentElement;
    if (input.type === "checkbox") {
      fieldWrapper = input.parentElement.parentElement;
    }

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
