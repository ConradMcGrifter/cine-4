import { schedule } from "/js/schedule.js";
/* 
this function creates the card element -> movie parameter takes a movie object from the schedule object
this day parameter is used to get the specific day from the showtimes object in the movie object inside the schedule object
ex) schedule-->movie1-->showtimes-->mon: ["7:30"]
*/
export const createMovieCard = (movie, day) => {
    // get the movie obj from the schedule object ex) movie1 or movie2
    let movieObj = schedule[movie];

    // template for the card component
    let movieCardTemplate = document.querySelector("[data-movieCard-template]");

    // this is the container the card elements will get added to
    let cardWrapper = document.querySelector("[data-cards-wrapper]");

    // access the card component inside the html template element
    let movieCard = movieCardTemplate.content.cloneNode(true).children[0];
    let timesWrapper = movieCard.querySelector("[data-times-wrapper]");

    // get all elements that will receive content from the movie object
    let title = movieCard.querySelector("[data-title]");
    let poster = movieCard.querySelector("[data-poster]");
    let synopsis = movieCard.querySelector("[data-synopsis]");

    // add content from movie object into the card component
    title.textContent = movieObj.title;
    poster.src = `${movieObj.poster}`;
    synopsis.textContent = movieObj.synopsis;

    // add the showtimes to the card element
    movieObj.showtimes[day].forEach((time) => {
        let showtime = document.createElement("div");
        showtime.setAttribute("data-card__time", null);
        showtime.innerText = time;
        timesWrapper.append(showtime);
    });

    movieCard.setAttribute("data-movie", movie);

    // add the card element inside the cards-wrapper element
    cardWrapper.append(movieCard);
};
