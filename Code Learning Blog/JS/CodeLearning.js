let navbarElement = document.getElementById("navbar");
let hamburgerElement = document.getElementById("hamburger");
hamburgerElement.addEventListener("click", function () {
    if (navbarElement.style.height != "240px") {
        navbarElement.style.height = "240px";
    }
    else {
        navbarElement.style.height = "63px";
    }
});