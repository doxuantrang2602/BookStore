// article.js

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
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
