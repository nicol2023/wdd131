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

// Copy the following code array named "temples" which consists of a sample of temple objects and place the array into your own JavaScript file.
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Buenos Aires Argentina",
      location: "Buenos Aires, Argentina",
      dedicated: "1968, January, 17",
      area: 30659,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/buenos-aires-argentina-temple/buenos-aires-argentina-temple-2970.jpg"
    },
    {
      templeName: "Denver Colorado",
      location: "Centennial, Colorado",
      dedicated: "1968, October, 24",
      area: 29117,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/denver-colorado-temple/denver-colorado-temple-43087.jpg"
    },
    {
      templeName: "Birmingham England",
      location: "Royal Sutton Coldfield, Birmingham",
      dedicated: "1968, October, 24",
      area: 10800,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/birmingham-england-temple/birmingham-england-temple-45435.jpg"
    },

  ];

  document.addEventListener("DOMContentLoaded", () => {
    const templeContainer = document.querySelector(".temple-container");
    const navLinks = document.querySelectorAll("nav ul li a");

    // Function to display temples
    function displayTemples(filteredTemples) {
      templeContainer.innerHTML = ""; // Clear previous content

      filteredTemples.forEach(temple => {
          const templeCard = document.createElement("figure");
          templeCard.innerHTML = `
              <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
              <figcaption>
                  <h3>${temple.templeName}</h3>
                  <p><strong>Location:</strong> ${temple.location}</p>
                  <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                  <p><strong>Area:</strong> ${temple.area} sq ft</p>
              </figcaption>
          `;
          templeContainer.appendChild(templeCard);
      });
  }

  // Function to filter temples based on menu selection
  function filterTemples(category) {
    let filtered;
    switch (category) {
        case "Old":
            filtered = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) < 1900);
            break;
        case "New":
            filtered = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) > 2000);
            break;
        case "Large":
            filtered = temples.filter(temple => temple.area > 90000);
            break;
        case "Small":
            filtered = temples.filter(temple => temple.area < 10000);
            break;
        default:
            filtered = temples;
    }
    displayTemples(filtered);
}

// Event listeners for navigation menu
navLinks.forEach(link => {
  link.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default link behavior
      const category = event.target.textContent;
      filterTemples(category);
  });
});

// Display all temples on page load
displayTemples(temples);
});