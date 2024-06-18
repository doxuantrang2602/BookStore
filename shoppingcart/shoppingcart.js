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

document.addEventListener('DOMContentLoaded', function() {
    const cartItems = document.querySelectorAll('.cart-item');

    cartItems.forEach(function(cartItem) {
        const quantityElement = cartItem.querySelector('.quantity');
        const price = parseFloat(cartItem.getAttribute('data-price'));

        const btnPlus = cartItem.querySelector('.btn-plus');
        const btnMinus = cartItem.querySelector('.btn-minus');
        const btnRemove = cartItem.querySelector('.btn-remove');

        // Xử lý sự kiện khi nhấn nút +
        btnPlus.addEventListener('click', function() {
            let quantity = parseInt(quantityElement.textContent);
            quantity++;
            quantityElement.textContent = quantity;
            updateSubtotal();
        });

        // Xử lý sự kiện khi nhấn nút -
        btnMinus.addEventListener('click', function() {
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 1) {
                quantity--;
                quantityElement.textContent = quantity;
                updateSubtotal();
            }
        });
        btnRemove.addEventListener('click', function() {
            cartItem.remove();
            updateSubtotal();
        });
    });
});
