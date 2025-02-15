// Guardar datos en localStorage
document.getElementById('customization-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = {
        type: document.getElementById('amigurumi-type').value,
        size: document.getElementById('size').value,
        color: document.getElementById('color').value,
        accessories: Array.from(document.querySelectorAll('input[name="accessories"]:checked')).map(el => el.value)
    };

    localStorage.setItem('amigurumiOrder', JSON.stringify(formData));
    window.location.href = 'review.html';
});