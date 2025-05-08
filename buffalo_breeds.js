document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("searchBox");
    const breeds = document.querySelectorAll(".breed");

    searchInput.addEventListener("keyup", function(event) {
        let searchText = event.target.value.toLowerCase();

        breeds.forEach(breed => {
            let breedName = breed.textContent.toLowerCase();
            if (breedName.includes(searchText)) {
                breed.style.display = "block";
            } else {
                breed.style.display = "none";
            }
        });
    });
});