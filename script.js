const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm_password");
const form = document.querySelector("form");
const span = document.querySelector("span");

form.addEventListener("submit", (e) => {
    if (password.value !== confirmPassword.value) {
        e.preventDefault();

        password.classList.add("invalid");
        confirmPassword.classList.add("invalid");

        span.textContent = "*passwords do not match";
    }
});