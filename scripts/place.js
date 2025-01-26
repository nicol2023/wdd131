// Obtener el año actual
let currentYear = new Date().getFullYear();
// Obtener la fecha de última modificación del documento
let lastModified = document.lastModified;

// Actualizar el pie de página con el año actual y la última modificación
document.getElementById('currentyear').textContent = currentYear;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;

// Valores estáticos para la temperatura y la velocidad del viento
let temperature = 10; // °C
let windSpeed = 5; // km/h

// Función para calcular el windchill
function calculateWindChill(temperature, windSpeed) {
    // Si las condiciones para el cálculo son válidas
    if ((temperature <= 10 && windSpeed > 4.8) || (temperature <= 50 && windSpeed > 3)) {
        // Fórmula para el cálculo del windchill (en °C y km/h)
        return (13.12 + 0.6215 * temperature -  11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(1);
    } else {
        return "N/A"; // Si no se cumplen las condiciones, mostrar "N/A"
    }
}

// Calcular el windchill y actualizar el elemento en la página
let windchill = calculateWindChill(temperature, windSpeed);
document.getElementById('windchill').textContent = `${windchill} °C`;