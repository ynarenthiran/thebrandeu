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

new Typed("#our-story", {
  strings: ["Our Story"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});
new Typed("#our-services", {
  strings: ["What We Do"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});
new Typed("#our-clients", {
  strings: ["Our Esteemed Clients"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});
new Typed("#our-partners", {
  strings: ["Who We Trusts"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});
new Typed("#subscribe-text", {
  strings: ["Start Elevating Your Brand Today."],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

// new Splide("#image-carousel", {
//   autoplay: "pause",
//   intersection: {
//     inView: {
//       autoplay: true,
//     },
//   },
//   perPage: 3,
//   breakpoints: {
//     640: {
//       perPage: 1,
//     },
//   },
// });
