const images = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg",
    "images/image5.jpg",
    "images/image6.jpg"
];


let currentImage = 0;

// Open Lightbox
function openLightbox(index) {
    currentImage = index;

    document.getElementById("lightbox").style.display = "flex";

    document.getElementById("lightbox-img").src =
        images[currentImage];
}

// Close Lightbox
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

// Next / Previous
function changeImage(direction) {

    currentImage += direction;

    if (currentImage >= images.length) {
        currentImage = 0;
    }

    if (currentImage < 0) {
        currentImage = images.length - 1;
    }

    document.getElementById("lightbox-img").src =
        images[currentImage];
}

// Filter Images
function filterImages(category) {

    const items = document.querySelectorAll(".gallery-item");

    items.forEach(item => {

        if (category === "all") {
            item.style.display = "block";
        }

        else if (item.classList.contains(category)) {
            item.style.display = "block";
        }

        else {
            item.style.display = "none";
        }
    });
}

// Close lightbox with Escape key
document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeLightbox();
    }

    if (event.key === "ArrowRight") {
        changeImage(1);
    }

    if (event.key === "ArrowLeft") {
        changeImage(-1);
    }
});