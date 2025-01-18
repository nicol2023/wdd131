// Footer: Dynamic Year and Last Modified Date

document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("currentyear");
    const lastModifiedParagraph = document.getElementById("lastModified");


    // Set the current year dynamically
    const currentyear = new Date().getFullYear();
    if (yearSpan) {
        yearSpan.textContent = currentyear;
    }

    // Set the last modified date dynamically
    const lastModified = document.lastModified;
    if (lastModifiedParagraph) {
        lastModifiedParagraph.textContent = `Last Modified: ${lastModified}`;
    }
});

// Hamburger Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.querySelector("nav ul");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            const isMenuOpen = navMenu.classList.toggle("show");
            // Change the hamburger icon to 'X' when menu is open
            hamburger.innerHTML = isMenuOpen ? "&times;" : "&#9776;";
        });
    }    
});
