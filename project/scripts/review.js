// Mostrar detalles del pedido
const orderDetails = document.getElementById('order-details');
const order = JSON.parse(localStorage.getItem('amigurumiOrder'));

if (order) {
    orderDetails.innerHTML = `
        <h3>Detalles del Pedido</h3>
        <p><strong>Modelo:</strong> ${order.type}</p>
        <p><strong>Tamaño:</strong> ${order.size}</p>
        <p><strong>Color:</strong> <span style="background-color: ${order.color}; padding: 5px; border-radius: 3px;"></span></p>
        <p><strong>Accesorios:</strong> ${order.accessories.join(', ') || 'Ninguno'}</p>
    `;
} else {
    orderDetails.innerHTML = '<p>No hay pedidos para mostrar.</p>';
}

// Confirmar pedido
document.getElementById('confirm-order').addEventListener('click', () => {
    alert('¡Pedido confirmado! Gracias por tu compra.');
    localStorage.removeItem('amigurumiOrder');
    window.location.href = 'customigurumis.html';
});