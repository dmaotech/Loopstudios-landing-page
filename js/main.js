const menuBtn = document.querySelector(".hamburguer-btn");
const closeMenu = document.querySelector(".icon-close");
const menu = document.querySelector(".menu");
const desktopMenu = document.querySelector(".menu-desktop");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    menu.classList.toggle("visible");

    (!menu.classList.contains("hidden"))
        ? menuBtn.src = "./images/icon-close.svg"
        : menuBtn.src = "./images/icon-hamburger.svg";

    window.addEventListener("scroll", () => {
        if (!menu.classList.contains("hidden")) {
            scrollTo(0, 0);
        }
    });
});

(screen.width >= "920")
    ? menuBtn.classList.toggle("hidden")
    : desktopMenu.classList.toggle("hidden");