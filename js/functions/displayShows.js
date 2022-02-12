import { removeCards } from "./removeCards.js";
import { createMovieCard } from "./createMovieCard.js";
import { setTrailerSource } from "./setTrailerSource.js";
import { schedule } from "../schedule.js";

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
