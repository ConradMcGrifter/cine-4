import { resetHeight } from "../resetHeight.js";
/*
this function is used to control the lightbox and adds an event listener "click" to
each card's "trailer" element that sets the src value of the lightbox iframe (youtube video)
based on the trailer elements data-trailer value

(the createMovieCard function sets the value of the data-trailer attribute to be the trailer value from 
the movie object in the schedule object. this function uses that value to set the src of the youtube iframe)
*/

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
        resetHeight();
        video.src = "";
    });

    // this closes the lightbox when any part of the screen is clicked on
    // lightbox.addEventListener("click", () => {
    //     lightbox.removeAttribute("data-display");
    //     resetHeight();
    //     video.src = "";
    // });
}
