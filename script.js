const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.querySelector("nav");
const toggleIcon = document.querySelector("toggle-icon");
const image1 = document.querySelector("image1");
const image2 = document.querySelector("image2");
const image3 = document.querySelector("image3");
const textBox = document.querySelector("text-box");

//Dark Mode Styles
function darkMode() {
  nav.style.backgroundColor = "rgb(0 0 0 / 50%)";
  textBox.style.backgroundColor = "rgb(255 255 255 / 50%)";
  console.log(toggleIcon.children);
}
// Switch theme dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    darkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    lightMode();
  }
}
//Event listener
toggleSwitch.addEventListener("change", switchTheme);
