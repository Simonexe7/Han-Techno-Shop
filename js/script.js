// tombol hamburger menu
const Hmenu = document.querySelector("#menu");
const navbarNav = document.querySelector(".menu-list");

// memunculkan navigasi
Hmenu.onclick = () => {
  navbarNav.classList.add("active");
};

// tombol close navbar
const btnClose = document.querySelector("#btnClose");

// menghilangkan navigasi
btnClose.onclick = (e) => {
  navbarNav.classList.remove("active");
  e.preventDefault();
};

// ketika mengklik diluar navbar
document.addEventListener("click", function (e) {
  if (!Hmenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
