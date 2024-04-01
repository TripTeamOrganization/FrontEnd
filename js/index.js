document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.getElementById("imageContainer");
    const images = ["../images/1.jpg", "../images/2.jpg", "../images/3.jpg", "../images/4.jpg", "../images/5.jpg"];
    let currentIndex = 0;

    // Función para mezclar el orden de las imágenes
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Función para renderizar una sola imagen con animación de evaporación
    function renderImage(index) {
        const slide = document.createElement("div");
        slide.classList.add("swiper-slide");
        const img = document.createElement("img");
        img.src = images[index];
        img.alt = "Random Image";
        img.style.opacity = 0; // Establece la opacidad inicial a 0
        img.onload = function() {
            img.style.opacity = 1; // Una vez cargada, establece la opacidad a 1 para mostrar la imagen
        };
        img.addEventListener("click", function() {
            // Al hacer clic en la imagen, cambia a la siguiente imagen con animación de evaporación
            img.style.opacity = 0; // Establece la opacidad a 0 para la animación de evaporación
            setTimeout(function() {
                currentIndex = (currentIndex + 1) % images.length;
                renderImage(currentIndex);
            }, 500); // Espera 500ms antes de cambiar a la siguiente imagen
        });
        slide.appendChild(img);
        imageContainer.innerHTML = ""; // Elimina la imagen actual
        imageContainer.appendChild(slide);
    }

    // Función para cambiar automáticamente la imagen cada 3 segundos con animación de evaporación
    function autoChangeImage() {
        setInterval(function() {
            const img = imageContainer.querySelector("img");
            img.style.opacity = 0; // Establece la opacidad a 0 para la animación de evaporación
            setTimeout(function() {
                currentIndex = (currentIndex + 1) % images.length;
                renderImage(currentIndex);
            }, 500); // Espera 500ms antes de cambiar a la siguiente imagen
        }, 3000);
    }

    renderImage(currentIndex); // Renderiza la primera imagen
    autoChangeImage(); // Inicia el cambio automático de imágenes
});

document.addEventListener("DOMContentLoaded", function () {
    const Link = document.getElementById("boton-testimonios");

    Link.addEventListener("click", function (event) {
        event.preventDefault();
        
        document.querySelector(".testimonios").scrollIntoView({ behavior: "smooth" });
    });
});