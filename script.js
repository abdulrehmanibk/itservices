const toggleBtn = document.getElementById("toggleBtn");
const navMobile = document.querySelector(".navMobile");
const aboutBtn = document.querySelectorAll("#aboutBtn");
const basBtn = document.querySelectorAll("#basBtn");
const modal = document.querySelector(".modal");
const basModal = document.querySelector(".basModal");
const ModalClose = document.querySelectorAll(".ModalClose");
const basModalClose = document.querySelector(".basModalClose");

toggleBtn.addEventListener("click", function (e) {
    e.preventDefault();
    navMobile.classList.toggle("active");

    toggleBtn.textContent = navMobile.classList.contains("active") ? 'X' : 'O';
});

// Close when clicking outside
document.addEventListener("click", function (e) {
    const isClickInsideMenu = navMobile.contains(e.target);
    const isClickOnButton = toggleBtn.contains(e.target);

    if (!isClickInsideMenu && !isClickOnButton && navMobile.classList.contains("active")) {
        navMobile.classList.remove("active");
        toggleBtn.textContent = 'O';
    }
});


aboutBtn.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        modal.classList.toggle("aboutActive");
    });
})
basBtn.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        basModal.classList.toggle("basModalActive");
    });
});

ModalClose.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        modal.classList.remove("aboutActive");
    });
});

basModalClose.addEventListener("click", function (e) {
    e.preventDefault();
    basModal.classList.remove("basModalActive");
});
