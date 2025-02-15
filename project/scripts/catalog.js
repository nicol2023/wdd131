const products = [
    
    {
        name: "Mini Mushroom",
        image: "images/amigurumi-1.jpg",
        description: "Un hongo mágico con detalles únicos.",
        price: 10.99
    },
    {
        name: "Axolotl",
        image: "images/amigurumi-2.jpg",
        description: "Un axolotl colorido y lleno de personalidad.",
        price: 18.99
    },
    {
        name: "Duck Flower",
        image: "images/amigurumi-3.jpg",
        description: "Un patito con un toque floral.",
        price: 14.99
    },
    {
        name: "Mini Cow",
        image: "images/amigurumi-6.jpg",
        description: "Una vaquita pequeña y tierna.",
        price: 16.99
    },
    {
        name: "Bee",
        image: "images/amigurumi-8.jpg",
        description: "Una abeja tejida con colores vibrantes.",
        price: 11.99
    },
    {
        name: "Luffy",
        image: "images/amigurumi-5.jpg",
        description: "El famoso personaje de One Piece en versión amigurumi.",
        price: 20.99
    },
    {
        name: "BT21",
        image: "images/amigurumi-7.jpg",
        description: "Personajes de BT21 en formato amigurumi.",
        price: 22.99
    },
    {
        name: "Cute Animals",
        image: "images/amigurumi-4.jpg",
        description: "Una colección de animales adorables.",
        price: 19.99
    },
    {
        name: "Harry Potter",
        image: "images/amigurumi-9.jpg",
        description: "Personajes de Harry Potter en versión amigurumi.",
        price: 25.99
    },
    {
        name: "Spiderman",
        image: "images/amigurumi-10.jpg",
        description: "El héroe arácnido en formato amigurumi.",
        price: 23.99
    }
];

const productContainer = document.querySelector('.product-list');

products.forEach(product => {
    const article = document.createElement('article');
    article.classList.add('product');
    article.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p><strong>Precio:</strong> $${product.price.toFixed(2)}</p>
        <a href="customize.html" class="btn">Personalizar</a>
    `;
    productContainer.appendChild(article);
});