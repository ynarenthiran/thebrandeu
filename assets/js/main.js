// Active Menu on Scrolling
const sections = document.querySelectorAll("section");
const menuItems = document.querySelectorAll(".menu");
// Get the offcanvas element
const offcanvasElement = document.getElementById("staticBackdrop");
// Get the offcanvas instance
const offcanvas = new bootstrap.Offcanvas(offcanvasElement);

const setActiveMenu = () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute("id");
    }
  });

  menuItems.forEach((item) => {
    item.classList.remove("active");
    if (item.getAttribute("href") === `#${currentSection}`) {
      item.classList.add("active");
    }
    item.addEventListener("click", () => {
      offcanvas?.hide();
    });
  });

  // Scroll to Top
  const goToTopButton = document.getElementById("goToTop");
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    goToTopButton?.classList?.add("visible");
  } else {
    goToTopButton?.classList?.remove("visible");
  }
};
window.addEventListener("scroll", setActiveMenu);
setActiveMenu();

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Owl Carousel
$(document).ready(function () {
  var owl = $(".owl-carousel");
  console.log(owl);
  owl?.owlCarousel({
    items: 4,
    loop: true,
    nav: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    stagePadding: 50,
  });
  owl?.trigger("play.owl.autoplay", [5000]);
});

function updateScreenSize() {
  // Determine the device type and add the corresponding class
  document.body.className = ''; // Remove all classes
  const screenWidth = window.innerWidth;
  if (screenWidth >= 992 && screenWidth < 1200) {
    document.body.classList.add("laptop");
  } else if (screenWidth >= 768 && screenWidth < 992) {
    document.body.classList.add("tablet");
  } else if (screenWidth >= 450 && screenWidth < 768) {
    document.body.classList.add("large-mobile");
  } else if (screenWidth < 450) {
    document.body.classList.add("mobile");
  }
}

// Initial screen size update
updateScreenSize();

window.addEventListener("resize", updateScreenSize);

const enquiryForm = document.getElementById("enquiryForm");
const responseMessage = document.getElementById("responseMessage");
const submitButton = document.getElementById("submitButton");
const spinner = document.getElementById("spinner");
enquiryForm.addEventListener("submit", function (e) {
  responseMessage.innerHTML = ""; // Clear previous response message
  e.preventDefault(); // Prevent default form submission

  var formData = new FormData(this);

  // Replace with your Google Apps Script URL
  var scriptURL =
    "https://script.google.com/macros/s/AKfycbwK7RAJvJwLuQIEYtVrF59J5YuxKBdPajPZgmE56CSk85xhE-CQxqzFdV1M2TxgUEhlug/exec";
  submitButton.disabled = true;
  spinner.hidden = false;
  fetch(scriptURL, { method: "POST", body: formData })
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
      if (data === "success") {
        responseMessage.innerHTML = `<span>Hi <b>${formData.get(
          "name"
        )}</b>, Thanks for your enquiry! We'll get back to you in 24 hours.</span>`;
        enquiryForm.reset();
      } else {
        responseMessage.innerHTML = `<span>Oops! Something went wrong... Please try again later.</span>`;
      }
      submitButton.disabled = false;
      spinner.hidden = true;
    })
    .catch((error) => {
      console.log(error);
      responseMessage.innerHTML = `<span>Oops! Something went wrong... Please try again later.</span>`;
      submitButton.disabled = false;
      spinner.hidden = true;
    });
});

// Form Validation
const nameInput = document.getElementById("name");
const companyInput = document.getElementById("company");
const emailInput = document.getElementById("email");
const contactInput = document.getElementById("phone");
nameInput.addEventListener("input", validateForm);
companyInput.addEventListener("input", validateForm);
emailInput.addEventListener("input", validateForm);
contactInput.addEventListener("input", validateForm);

function validateForm() {
  let isValid = true;
  responseMessage.innerHTML = ""; // Clear previous response message

  // Validate name
  if (!nameInput.value.trim()) {
    isValid = false;
  }

  // Validate company
  if (!companyInput.value.trim()) {
    isValid = false;
  }

  // Validate email
  if (!emailInput.value.trim()) {
    isValid = false;
  }

  // Validate contact
  if (!contactInput.value.trim()) {
    isValid = false;
  }

  // Enable or disable the submit button
  submitButton.disabled = !isValid;
  console.log("isValid", isValid);
  if (!isValid) {
    responseMessage.innerHTML = `<span>Please fill in all the required (*) fields.</span>`;
  }
}