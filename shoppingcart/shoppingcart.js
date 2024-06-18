document.addEventListener('DOMContentLoaded', function() {
    updateSubtotal();

    const removeButtons = document.querySelectorAll('.btn-remove');
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const cartItem = this.closest('.cart-item');
            cartItem.remove();
            updateSubtotal();
        });
    });

    const checkoutButton = document.querySelector('.btn-checkout');
    checkoutButton.addEventListener('click', function() {
        alert('Thanh toán thành công');
    });
});

function updateSubtotal() {
    const cartItems = document.querySelectorAll('.cart-item');
    let subtotal = 0;
    cartItems.forEach(item => {
        const price = parseInt(item.getAttribute('data-price'));
        const quantity = parseInt(item.querySelector('.quantity').innerText);
        subtotal += price * quantity;
    });
    document.querySelector('.subtotal').innerText = subtotal.toLocaleString('vi-VN');
}
