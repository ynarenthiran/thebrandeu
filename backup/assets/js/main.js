// Active Menu on Scrolling
const sections = document.querySelectorAll("section");
const menuItems = document.querySelectorAll(".menu");
// Get the offcanvas element
const offcanvasElement = document.getElementById('staticBackdrop');
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
    goToTopButton.classList.add("visible");
  } else {
    goToTopButton.classList.remove("visible");
  }
};
window.addEventListener("scroll", setActiveMenu);
setActiveMenu();

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Typewriter
new Typed("#subscribe-text", {
  strings: ["Start Elevating Your Brand Today."],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

const screenWidth = window.innerWidth;

// Determine the device type and add the corresponding class
if (screenWidth >= 992 && screenWidth < 1200) {
  document.body.classList.add("laptop");
} else if (screenWidth >= 768 && screenWidth < 992) {
  document.body.classList.add("tablet");
} else if (screenWidth >= 450 && screenWidth < 768) {
  document.body.classList.add("large-mobile");
} else if (screenWidth < 450) {
  document.body.classList.add("mobile");
}
