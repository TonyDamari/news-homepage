const menuOpen = document.getElementById("mobile-menu");
const menuClose = document.getElementById("close");
const menu = document.querySelector(".nav-list");

menuOpen.addEventListener("click", () => {
    menu.classList.add("active");
});

menuClose.addEventListener("click", () => {
    menu.classList.remove("active");
});
