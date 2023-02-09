const toggleModeButton = document.getElementById("toggle-mode-button");
const icon = document.getElementById("icon");

// corrobora el modo de la pagina
const currentMode = localStorage.getItem("mode") || "light";

// aplica el modo al elemento body
document.body.classList.add(currentMode + "-mode");

// actualiza el src del icono
icon.setAttribute("src", "icono/" + (currentMode === "dark" ? "sun" : "moon") + ".svg");

// maneja el evento del botón
toggleModeButton.addEventListener("click", function() {
  // cambia el modo
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");

  // actualiza el src del icono
  icon.setAttribute("src", "icono/" + (document.body.classList.contains("dark-mode") ? "sun" : "moon") + ".svg");
  // cambia el color del boton
  toggleModeButton.classList.toggle("btn-dark")
  toggleModeButton.classList.toggle("btn-light")
  // guarda el modo en local storage
  localStorage.setItem("mode", document.body.classList.contains("dark-mode") ? "dark" : "light");
});