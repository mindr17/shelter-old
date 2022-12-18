const addMobileMenu = () => {
  const header = document.querySelector('header');
  const burgerButton = document.querySelector(".header__burger");
  const menuContent = document.querySelector(".menu__content");
  const navLinks = document.querySelectorAll(".header__navigation-link");
  
  const openMenu = () => {
    header.classList.add('_menu-open');
    };
  const closeMenu = () => {
    header.classList.remove('_menu-open');
  };

  document.addEventListener("click", (event) => {
    if (!header.classList.contains("_menu-open")) {
      return;
    }
    if (
      event.target.textContent === "About the shelter" ||
      !menuContent.contains(event.target) &&
      event.target !== burgerButton
    ) {
      closeMenu();
    }
  });

  burgerButton.addEventListener("click", () => {
    if (header.classList.contains("_menu-open")) {
      closeMenu();
      return;
    }
    openMenu();
  });

  navLinks.forEach((link) => {
    if (
      link.textContent === "About the shelter" ||
      link.textContent === "Our pets"
    ) {
      link.addEventListener("click", () => {
        closeMenu();
      });
    }
  });

  const updateLinks = () => {
    if (
      document.location.pathname == "/" ||
      document.location.pathname == "index.html"
    ) {
      logo.removeAttribute("href");
      logo.classList.add("_disabled");
    };

    navLinks.forEach((link) => {
      let linkText = link.textContent;
      switch (linkText) {
        case "About the shelter":
          link.href = "/";
          break;
        case "Our pets":
          break;
        default:
          link.removeAttribute("href");
          link.classList.add("_disabled");
          break;
      }
    });
  };
  // updateLinks();
};

export default addMobileMenu;