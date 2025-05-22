document.querySelector("h1").addEventListener("click", () => {
    alert("¡Hola! Has hecho clic en el título.");
});

function toggleMenu() {
    var menuContainer = document.querySelector(".menu-container");

    if (menuContainer.style.left === "-250px") {
        menuContainer.style.left = "0px";
    } else {
        menuContainer.style.left = "-250px";
    }
}

