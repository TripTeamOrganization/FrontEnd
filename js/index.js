
function mostrarMenu() {
    const divAuthButtons = document.getElementById("authButtonsContainers");
    if (divAuthButtons.style.display === "block")
        divAuthButtons.style.display = "none";
    else
        divAuthButtons.style.display = "block";

    const divBotones = document.getElementById("menuList");
    if (divBotones.style.display === "block")
        divBotones.style.display = "none";
    else
        divBotones.style.display = "block";
}


document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.getElementById("imageContainer");
    const images = ["../images/1.jpg", "../images/2.jpg", "../images/3.jpg", "../images/4.jpg", "../images/5.jpg"];
    let currentIndex = 0;

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function renderImage(index) {
        const slide = document.createElement("div");
        slide.classList.add("swiper-slide");
        const img = document.createElement("img");
        img.src = images[index];
        img.alt = "Random Image";
        img.style.opacity = 0;
        img.onload = function () {
            img.style.opacity = 1;
        };
        img.addEventListener("click", function () {

            img.style.opacity = 0;
            setTimeout(function () {
                currentIndex = (currentIndex + 1) % images.length;
                renderImage(currentIndex);
            }, 500);
        });
        slide.appendChild(img);
        imageContainer.innerHTML = "";
        imageContainer.appendChild(slide);
    }


    function autoChangeImage() {
        setInterval(function () {
            const img = imageContainer.querySelector("img");
            img.style.opacity = 0;
            setTimeout(function () {
                currentIndex = (currentIndex + 1) % images.length;
                renderImage(currentIndex);
            }, 500);
        }, 3000);
    }
    renderImage(currentIndex);
    autoChangeImage();
});


document.addEventListener("DOMContentLoaded", function () {
    const Link = document.getElementById("boton-Inicio");
    Link.addEventListener("click", function (event) {
        event.preventDefault();
        document.querySelector(".hero").scrollIntoView({ behavior: "smooth" });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const Link = document.getElementById("boton-Cards");

    Link.addEventListener("click", function (event) {
        event.preventDefault();
        document.querySelector(".features2").scrollIntoView({ behavior: "smooth" });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const Link = document.getElementById("boton-testimonios");

    Link.addEventListener("click", function (event) {
        event.preventDefault();
        document.querySelector(".testimonios").scrollIntoView({ behavior: "smooth" });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const Link = document.getElementById("boton-Convenios");
    Link.addEventListener("click", function (event) {
        event.preventDefault();

        document.querySelector(".convenios").scrollIntoView({ behavior: "smooth" });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const aboutLink = document.getElementById("boton-acerca");
    aboutLink.addEventListener("click", function (event) {
        event.preventDefault();
        document.querySelector(".about").scrollIntoView({ behavior: "smooth" });
    });
});
