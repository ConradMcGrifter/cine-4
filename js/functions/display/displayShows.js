import { createMovieCard } from "./createMovieCard.js";
import { setTrailerSource } from "./setTrailerSource.js";
import { schedule } from "../../schedule.js";

export function displayShows(day) {
    // remove all cards currently in the DOM
    let cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
        card.remove();
    });
    // loop through the movie objects from the schedule object
    for (let movie in schedule) {
        // if the movie object has show times for the specific day, create card ele + add showtimes
        if (schedule[movie].showtimes[day][0] != "") {
            createMovieCard(movie, day);
            setTrailerSource();
        }
    }
}
