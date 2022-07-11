const openIcon = document.getElementById("openIcon");
const closeIcon = document.getElementById("closeIcon");
const navbar = document.getElementById("nav");
const myDropDown = document.getElementById("myDropdown");
const dropButton = document.getElementById("dropButton");
const dropIcon = document.getElementById("dropIcon");

// Open Navbar
openIcon.onclick = function openNav() {
  navbar.style.display = "block";
  closeIcon.style.display = "block";
  openIcon.style.display = "none";
};

//Close Navbar
closeIcon.onclick = function closeNav() {
  navbar.style.display = "none";
  closeIcon.style.display = "none";
  openIcon.style.display = "block";
};

dropButton.onclick = function dropDown() {
  myDropDown.classList.toggle("show");
  // dropIcon.classList.toggle("rotate");
  dropIcon.src = "images/icon-arrow-down.svg";
};

window.onclick = function (e) {
  if (!e.target.matches("#dropButton")) {
    // e.target.setCapture(false);
    if (myDropDown.classList.contains("show")) {
      myDropDown.classList.remove("show");
    }
  }
};
