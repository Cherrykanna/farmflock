document.addEventListener("DOMContentLoaded", function() {
    const searchBox = document.getElementById("searchBox");
    const breeds = document.querySelectorAll(".breed");

    searchBox.addEventListener("input", function() {
        const searchValue = searchBox.value.toLowerCase();

        breeds.forEach(breed => {
            const breedName = breed.querySelector("p").textContent.toLowerCase();
            if (breedName.includes(searchValue)) {
                breed.style.display = "block";
            } else {
                breed.style.display = "none";
            }
        });
    });
});