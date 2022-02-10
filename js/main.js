import { schedule } from "/js/schedule.js";
import { createMovieCard } from "/js/functions/createMovieCard.js";
import { tabs } from "/js/dayTabs.js";

console.log(tabs.d);

function removeCards() {
    let cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
        card.remove();
    });
}

function setTrailerSource() {
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

export function displayShows(day) {
    // remove all cards currently in the DOM
    removeCards();
    // loop through the movie objects in schedule object
    for (let movie in schedule) {
        // if the movie object has show times for the specific day, create card ele + add showtimes
        if (schedule[movie].showtimes[day][0] != "") {
            createMovieCard(movie, day);
            setTrailerSource();
        }
    }
}
