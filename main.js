if ($(".slider").length !== 0) {
  $(".slider").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    prevArrow: false,
    nextArrow: false,
  });
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity() && document.getElementById('validationCustom01').value !== "brando") {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();


