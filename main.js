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
if (document.getElementById("form")) {
  (function () {
    const form = document.getElementById("form");
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const maleGender = document.getElementById("male");
    const femaleGender = document.getElementById("female");
    const birthYear = document.getElementById("birth-year");
    const address = document.getElementById("address");
    const city = document.getElementById("city");
    const responseMsg = document.getElementById("response-msg");
    let formValues = [];
    let errorCounter = 0;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      checkInputs();
      //Posto nisam nasao resenje za postovanje vrednosti inputa bez backend koda koristeci AJAX, napravio sam ovaj "fake" submit koji radi stvar iz zadatka.
      if (errorCounter === 0) {
        setTimeout(function () {
          form.style.display = "none";
          responseMsg.innerHTML =
            "<h2 class='mt-3'>You have successfully submitted your data!</h2>";
          formValues.map((value) => {
            responseMsg.innerHTML += `<p>${value}</p>`;
          });
        }, 1000);
      }
      errorCounter = 0;
    });

    function checkInputs() {
      formValues = [];
      const firstNameValue = firstName.value.trim();
      const lastNameValue = lastName.value.trim();
      const birthYearValue = birthYear.value;
      const addressValue = address.value.trim();
      const cityValue = city.value.trim();

      const regex = new RegExp("^[a-zA-Z0-9\\sčČćĆšŠđĐžŽ]+$");

      if (firstNameValue === "") {
        setErrorFor(firstName, "First name can't be blank");
      } else if (!regex.test(firstNameValue)) {
        setErrorFor(firstName, "Special characters aren't allowed");
      } else {
        setSuccessFor(firstName, firstNameValue);
      }

      if (lastNameValue === "") {
        setErrorFor(lastName, "Last name can't be blank");
      } else if (!regex.test(lastNameValue)) {
        setErrorFor(lastName, "Special characters aren't allowed");
      } else {
        setSuccessFor(lastName, lastNameValue);
      }

      if (maleGender.checked === false && femaleGender.checked === false) {
        setErrorFor(maleGender, "Please select your gender");
      } else if (maleGender.checked === true && femaleGender.checked === true) {
        setErrorFor(femaleGender, "Please select either male or female gender");
      } else {
        if (maleGender.checked) {
          setSuccessFor(maleGender.parentElement, maleGender.name);
        } else {
          setSuccessFor(femaleGender.parentElement, femaleGender.name);
        }
      }

      if (birthYearValue === "") {
        setErrorFor(birthYear, "Please choose your year of birth.");
      } else {
        setSuccessFor(birthYear, birthYearValue);
      }

      if (addressValue === "") {
        setErrorFor(address, "Address field can't be blank");
      } else if (!regex.test(addressValue)) {
        setErrorFor(address, "Special characters aren't allowed");
      } else {
        setSuccessFor(address, addressValue);
      }

      if (cityValue === "") {
        setErrorFor(city, "City name can't be blank");
      } else if (!regex.test(cityValue)) {
        setErrorFor(city, "Special characters aren't allowed");
      } else {
        setSuccessFor(city, cityValue);
      }
    }

    function setErrorFor(input, message) {
      let fieldWrapper = input.parentElement;
      if (input.type === "checkbox") {
        fieldWrapper = input.parentElement.parentElement;
      }

      const errorMsg = fieldWrapper.querySelector(".error-msg");
      fieldWrapper.classList.add("error");
      errorMsg.innerText = message;
      errorCounter++;
    }

    function setSuccessFor(input, value) {
      const fieldWrapper = input.parentElement;
      fieldWrapper.classList.add("success");
      fieldWrapper.classList.remove("error");
      formValues.push(value);
    }
  })();
}
