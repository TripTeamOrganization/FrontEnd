document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper(".swiper-container", {
        pagination: {
            el: ".swiper-pagination",
        },
        slidesPerView: 1, // Solo se muestra una imagen a la vez
        loop: true, // Bucle infinito
        autoplay: {
            delay: 5000, // Tiempo de espera entre imágenes en milisegundos
            disableOnInteraction: false, // No detener la reproducción al interactuar con el slider
        },
        speed: 1000, // Velocidad de transición en milisegundos (1 segundo)
    });
});
