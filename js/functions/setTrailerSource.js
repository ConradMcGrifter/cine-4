export function setTrailerSource() {
    let cardTrailer = document.querySelectorAll("[data-trailer]");

    let lightbox = document.querySelector(".lightbox");
    let closeBtn = document.querySelector(".lightbox__close");
    let video = document.querySelector(".lightbox__video");

    cardTrailer.forEach((trailer) => {
        trailer.addEventListener("click", () => {
            lightbox.setAttribute("data-display", "true");
            video.src = `${trailer.dataset.trailer}`;
        });
    });

    closeBtn.addEventListener("click", () => {
        lightbox.removeAttribute("data-display");
        video.src = "";
    });

    lightbox.addEventListener("click", () => {
        lightbox.removeAttribute("data-display");
        video.src = "";
    });
}
