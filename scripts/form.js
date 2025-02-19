document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { id: "fc-1888", name: "Flux Capacitor" },
        { id: "fc-2050", name: "Power Laces" },
        { id: "fs-1987", name: "Time Circuits" },
        { id: "ac-2000", name: "Low Voltage Reactor" },
        { id: "jj-1969", name: "Warp Equalizer" }
    ];

    const productSelect = document.getElementById("productName");
    
    products.forEach(product => {
        let option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    // Agregar año actual y última modificación en el footer
    document.getElementById("year").textContent = `© ${new Date().getFullYear()} Evelin Montaño`;
    document.getElementById("modified-date").textContent = `Last Modified: ${document.lastModified}`;
});