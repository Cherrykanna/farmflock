function showForm(animal) {
    const formSection = document.getElementById("form-section");
    const formTitle = document.getElementById("form-title");

    // Set title based on clicked animal
    formTitle.textContent = (animal === "cow") ? "Cow Ration Details" : "Buffalo Ration Details";

    // Toggle visibility
    if (formSection.classList.contains("hidden")) {
        formSection.classList.remove("hidden");
    } else {
        formSection.classList.add("hidden");
    }
}
