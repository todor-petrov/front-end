document.addEventListener("DOMContentLoaded", function () {

    var images = [
       "images/image_1.png",
       "images/image_2.png",
       "images/image_3.png",
       "images/image_4.png",
       "images/image_5.png",
    ];

    var randomIndex = Math.floor(Math.random() * images.length);

    var heroSection = document.getElementById("hero-section");

    heroSection.style.backgroundImage = "url('" + images[randomIndex] + "')";
});