document.addEventListener("DOMContentLoaded", () => {
    let reviewsCount = localStorage.getItem("reviewsCount") || 0;
    reviewsCount++;
    localStorage.setItem("reviewsCount", reviewsCount);
    
    // Agregar el conteo en la página de confirmación
    const reviewMessage = document.createElement("p");
    reviewMessage.textContent = `Total Reviews Submitted: ${reviewsCount}`;
    document.querySelector("main").appendChild(reviewMessage);

    // Agregar año actual y última modificación en el footer
    document.getElementById("year").textContent = `© ${new Date().getFullYear()} Evelin Montaño`;
    document.getElementById("modified-date").textContent = `Last Modified: ${document.lastModified}`;
});