import { createMovieCard } from "./createMovieCard.js";
import { setTrailerSource } from "./setTrailerSource.js";
import { schedule } from "../../schedule.js";

export function displayShows(day, obj) {
    if (Object.keys(obj).length == 0) {
        console.log("shee");
        document.querySelector(".cards-wrapper").innerText =
            "no showtimes available for this day";
    }
    // remove all cards currently in the DOM
    let cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
        card.remove();
    });

    // if the full schedule of showtimes is displayed -> remove it
    let fullShowtimes = document.querySelectorAll(
        "[data-schedule-movie--wrap]"
    );
    fullShowtimes.forEach((movie) => {
        movie.remove();
    });

    // loop through the movie objects from the schedule object
    for (let movie in obj) {
        // if the movie object has show times for the specific day, create card ele + add showtimes
        if (obj[movie].showtimes[day][0] != "") {
            createMovieCard(movie, day);
            setTrailerSource();
        }
    }
}
