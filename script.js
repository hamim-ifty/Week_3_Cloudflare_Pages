// script.js
document.addEventListener("DOMContentLoaded", function() {
    const oamkLink = document.querySelector(".oamk-link");
    oamkLink.addEventListener("mouseover", function() {
        oamkLink.style.color = "red";
    });
    oamkLink.addEventListener("mouseout", function() {
        oamkLink.style.color = "#1a73e8";
    });
});
