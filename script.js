const projectButton = document.getElementById("projectButton");
const projectModal = document.getElementById("projectModal");
const closeModal = document.getElementById("closeModal");

projectButton.addEventListener("click", function(event) {
    event.preventDefault();
    projectModal.classList.add("active");
});

closeModal.addEventListener("click", function() {
    projectModal.classList.remove("active");
});

projectModal.addEventListener("click", function(event) {
    if (event.target === projectModal) {
        projectModal.classList.remove("active");
    }
});