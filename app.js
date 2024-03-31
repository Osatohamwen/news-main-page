const navItems = document.getElementById("sidebar")
const menuIcon = document.getElementById("showsidebar")
const menuActiveIcon = document.getElementById("hidebar")
const sideBlur = document.getElementById("sideblur")

menuIcon.addEventListener('click',(e) => {
    menuActiveIcon.style.display = "flex";
    menuIcon.style.display = "none";
    navItems.style.display = "flex";
    sideBlur.style.display = "flex";
});

menuActiveIcon.addEventListener('click',(e) => {
    menuActiveIcon.style.display = "none";
    menuIcon.style.display = "flex";
    navItems.style.display = "none";
    sideBlur.style.display = "none";
});
