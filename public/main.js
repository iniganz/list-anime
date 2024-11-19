let prevScrollPos = window.pageYOffset; // Track previous scroll position
const navbar = document.getElementById("navbar");

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;

    // If user scrolls down, hide navbar
    if (prevScrollPos < currentScrollPos) {
        navbar.classList.add("navbar-hidden");
    } else {
        // If user scrolls up, show navbar
        navbar.classList.remove("navbar-hidden");
    }

    prevScrollPos = currentScrollPos; // Update previous scroll position
};

let cuy = "mohon dibuka di desktop atau di laptop karena untuk selain 2 device itu tidak responsive";

// alert('username');


function showAlert() {
    const name = document.getElementById('username').value;
    if (name.trim() !== "") {
        alert(`Selamat datang "${name}" di website saya!`);
    } else {
        alert("Silakan masukkan nama terlebih dahulu!");
    }
}
