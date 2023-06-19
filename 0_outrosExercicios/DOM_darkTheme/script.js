function lightTheme() {
  document.body.style.color = "#292929";
  document.body.style.backgroundColor = "#f0f8ff";
}

function darkTheme() {
  document.body.style.color = "#f0f8ff";
  document.body.style.backgroundColor = "#292929";
}

function switchTheme() {
  document.body.classList.toggle("isLight");
  document.body.classList.toggle("isDark");
}

document.getElementById("lightBtn").addEventListener("click", lightTheme);
document.getElementById("darkBtn").addEventListener("click", darkTheme);
document.getElementById("switchBtn").addEventListener("click", switchTheme);
