// Active Menu on Scrolling
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const menuItems = document.querySelectorAll(".menu");

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
    });
  };

  window.addEventListener("scroll", setActiveMenu);
  setActiveMenu();
});

// Typewriter
new Typed("#subscribe-text", {
  strings: ["Start Elevating Your Brand Today."],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});
