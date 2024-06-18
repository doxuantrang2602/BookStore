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
