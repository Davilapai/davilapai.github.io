// Seleccionamos la sección de portada
const hero = document.querySelector(".hero-section");

// Escuchamos el evento de scroll (cuando el usuario baja la página)
window.addEventListener("scroll", () => {
    // Cuánto has hecho scroll
    let scrollY = window.scrollY;

    // Calculamos opacidad (1 = visible, 0 = invisible)
    let opacity = 1 - scrollY / 400;

    // Evitamos que sea negativa
    if (opacity < 0) opacity = 0;

    // Aplicamos al estilo de la portada
    hero.style.opacity = opacity;
});
