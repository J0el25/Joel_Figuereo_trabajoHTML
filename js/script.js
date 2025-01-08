document.addEventListener("DOMContentLoaded", function () {
    const currentPath = window.location.pathname; // Obtiene la ruta actual
    const navLinks = document.querySelectorAll(".navbar ul li a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.parentElement.classList.add("active");
        }
    });
});