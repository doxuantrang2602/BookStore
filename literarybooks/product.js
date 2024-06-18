document.addEventListener("DOMContentLoaded", function() {
    const selectBox = document.getElementById("sort-select");
    const itemsContainer = document.querySelector(".product2");
    selectBox.addEventListener("change", function() {
        const selectedValue = selectBox.value;
        if (selectedValue === "default") {
            window.location.href = "product.html";
            return; 
        }
        if (selectedValue === "low-to-high") {
            sortItems("data-price", "asc");
        } else if (selectedValue === "high-to-low") {
            sortItems("data-price", "desc");
        }
    });
    function sortItems(attribute, order) {
        const items = Array.from(itemsContainer.querySelectorAll(".item2"));

        items.sort((a, b) => {
            const priceA = parseFloat(a.querySelector(".pirce").innerText.replace(' VNĐ', ''));
            const priceB = parseFloat(b.querySelector(".pirce").innerText.replace(' VNĐ', ''));

            if (order === "asc") {
                return priceA - priceB;
            } else {
                return priceB - priceA;
            }
        });
        while (itemsContainer.firstChild) {
            itemsContainer.removeChild(itemsContainer.firstChild);
        }
        items.forEach(item => {
            itemsContainer.appendChild(item);
        });
    }
});


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

window.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset;
    var scrollToTopButton = document.querySelector('.scroll-to-top');
    if (scrollPosition > 300) { 
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

function smoothScrollToTop() {
    const targetPosition = 0;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000; 
    let start = null;

    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(0, easeInOutQuad(progress, startPosition, distance, duration));
        if (progress < duration) {
            window.requestAnimationFrame(step);
        }
    }

    window.requestAnimationFrame(step);
}

function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
}
