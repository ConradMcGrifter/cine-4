import { createMovieCard } from "./createMovieCard.js";
import { setTrailerSource } from "./setTrailerSource.js";
import { schedule } from "../../schedule.js";

export function displayShows(day, obj) {
    if (Object.keys(obj).length == 0) {
        document
            .querySelector("[data-error]")
            .setAttribute("data-visibility", "visible");
    } else {
        //remove error message for day with no showtimes
        document
            .querySelector("[data-error]")
            .removeAttribute("data-visibility");
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
