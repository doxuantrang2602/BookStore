document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const boxLeft = this.closest('.chitiet').querySelector('.box-left');
            const imgSrc = boxLeft.querySelector('img').src;
            const cloneImg = document.createElement('img');
            cloneImg.src = imgSrc;
            cloneImg.classList.add('cart-item-animation');
            document.body.appendChild(cloneImg);
            setTimeout(() => {
                cloneImg.remove();
            }, 1000);
            alert('Sản phẩm đã được thêm vào giỏ hàng.');
            event.preventDefault();
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
    var productName = getParameterByName('name');
    var productAuthor = getParameterByName('author');
    var productPrice = getParameterByName('price');
    var productImg = getParameterByName('img');
    document.getElementById('product-img').src = 'img/' + productImg;
    document.getElementById('product-title').textContent = productName;
    document.getElementById('product-price').textContent = productPrice + ' VNĐ';
    document.getElementById('product-author').textContent = 'Tác giả: ' + productAuthor;
});

