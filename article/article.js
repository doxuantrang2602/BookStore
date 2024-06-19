function submitComment() {
    var name = document.getElementById("name").value;
    var comment = document.getElementById("comment").value;
    var commentSection = document.getElementById("commentSection");

    if (name && comment) {
        var commentDiv = document.createElement("div");
        commentDiv.classList.add("comment");

        var commentHeader = document.createElement("h3");
        commentHeader.textContent = name;

        var commentText = document.createElement("p");
        commentText.textContent = comment;

        var commentDate = document.createElement("span");
        commentDate.textContent = new Date().toLocaleDateString();

        commentDiv.appendChild(commentHeader);
        commentDiv.appendChild(commentText);
        commentDiv.appendChild(commentDate);

        commentSection.appendChild(commentDiv);

        document.getElementById("name").value = "";
        document.getElementById("comment").value = "";
    } else {
        alert("Vui lòng điền đầy đủ thông tin.");
    }
}

window.onscroll = function () {
    var scrollToTopButton = document.querySelector(".scroll-to-top");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
};

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
