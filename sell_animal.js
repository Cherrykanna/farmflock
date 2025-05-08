document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector(".search-bar input");

    searchInput.addEventListener("keyup", function(event) {
        let searchText = event.target.value.toLowerCase();
        let categories = document.querySelectorAll(".category");

        categories.forEach(category => {
            let categoryText = category.textContent.toLowerCase();
            if (categoryText.includes(searchText)) {
                category.style.display = "block";
            } else {
                category.style.display = "none";
            }
        });
    });
});
