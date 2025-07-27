document.querySelector("h1").addEventListener("click", () => {
    alert("¡Hola! Has hecho clic en el título.");
});

function toggleMenu() {
  const menu = document.getElementById('menu');
  const btn  = document.querySelector('.menu-button');
  const isOpen = menu.classList.toggle('open');
  btn.setAttribute('aria-expanded', isOpen);
}

document.addEventListener('click', (e) => {
  const container = document.querySelector('.menu-container');
  const menu      = document.getElementById('menu');
  const btn       = document.querySelector('.menu-button');

  if (!container.contains(e.target)) {
    menu.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  }
});


