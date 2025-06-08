document.querySelector("h1").addEventListener("click", () => {
    alert("¡Hola! Has hecho clic en el título.");
});

function toggleMenu() {
  var menuContainer = document.querySelector(".menu-container");
  menuContainer.classList.toggle("active");
}


