// Hamburger Menu mobile act
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector("#hamburger-menu");
  const navbarNav = document.querySelector(".navbar-nav");
  const navbar = document.querySelector(".navbar");

  if (hamburger && navbarNav) {
    hamburger.addEventListener("click", (e) => {
      e.preventDefault(); // biar nggak scroll ke atas
      navbarNav.classList.toggle("active");
    });
  }

  // Klik di luar sidebar untuk tutup
  document.addEventListener("click", (e) => {
    if (!navbar.contains(e.target) && navbarNav.classList.contains("active")) {
      navbarNav.classList.remove("active");
    }
  });

  // Navbar background change on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight - 100) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});

const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,

  // Optional: pagination & navigation
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Optional: autoplay
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
});

// Animasi About
// Fungsi untuk reset animasi
function restartAboutAnimation() {
  const left = document.querySelector(".about-data");
  const right = document.querySelector(".about-image");

  // Hapus class animasi dulu
  left.classList.remove("active");
  right.classList.remove("active");

  // Paksa reflow agar browser benar-benar "reset"
  void left.offsetWidth;
  void right.offsetWidth;

  // Tambah ulang class animasi
  left.classList.add("active");
  right.classList.add("active");
}

// Jalankan saat klik navbar "About"
document.querySelector('a[href="#about"]').addEventListener("click", () => {
  setTimeout(restartAboutAnimation, 300); // beri delay sedikit agar smooth
});

// Optional: aktifkan animasi saat pertama kali scroll ke #about
window.addEventListener("scroll", () => {
  const aboutSection = document.getElementById("about");
  const rect = aboutSection.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom > 0) {
    restartAboutAnimation();
  }
});

const swiperdetail = new Swiper(".swiper-detail", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

fetch("footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  });
