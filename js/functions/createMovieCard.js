import { schedule } from "../schedule.js";

// get the local time then use that time and compare it to the showtimes in each card -> gray out any times that have already passed
// should this code go into the createMovieCards.js file? or displayShows.js?
// let localTime = new Date().toLocaleTimeString();
// console.log(localTime.split(":"));

//----------------------------------------------------------------------------------
let d = new Date();
// gets the current date then changes it into a string with only the month and day
// this variable is then used to set the inital showtimeDate for the showtimeHeader inside the createMovieCard function
let today = `${d.toString().split(" ")[1]} ${d.toString().split(" ")[2]}`;

/*
get all the tabs (displaying the day of the week + the date) and put them into an array.
loop through the array of tabs and add an event listner to each one -> when clicked the 
showtimeDate variable's value becomes whatever the innerText of the clicked on tabs date is.
the showtimeDate variable is then used inside the createMovieCard function to set the date 
of the showtimeHeader variable for all the cards that get created
*/
let showtimeDate = today; // initializes the showtimeDate to be the current day
let tabs = Array.from(document.querySelectorAll(".tab"));

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        showtimeDate = tab.querySelector("[data-date]").innerText;
    });
});

//------------------------------------------------------------------------------
/* 
this function creates the card element -> movie parameter takes a movie object from 
the schedule object, the day parameter is used to get the specific day from the 
showtimes object in the movie object inside the schedule object
ex) schedule-->movie1-->showtimes-->fri: ["5:10", "7:30"]
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
    // this is the element that the cards will be appended to
    let timesWrapper = movieCard.querySelector("[data-times-wrapper]");

    // get all elements that will receive content from the movie object
    let title = movieCard.querySelector("[data-title]");
    let poster = movieCard.querySelector("[data-poster]");
    let synopsis = movieCard.querySelector("[data-synopsis]");
    let trailer = movieCard.querySelector("[data-trailer]");
    let showtimeHeader = movieCard.querySelector("[data-showtime-header]");

    // add content from movie object into the card component
    title.textContent = movieObj.title;
    poster.src = `${movieObj.poster}`;
    synopsis.textContent = movieObj.synopsis;
    trailer.setAttribute("data-trailer", movieObj.trailer);
    showtimeHeader.textContent += showtimeDate;

    // add the showtimes from the movie object to the card element
    movieObj.showtimes[day].forEach((time) => {
        let showtime = document.createElement("div");
        showtime.setAttribute("data-card__time", null);
        showtime.innerText = time;
        timesWrapper.append(showtime);
        // -----------------------
        // if (time == "12:00pm") {
        //     console.log("12:00");
        // }
        // -----------------------
    });

    movieCard.setAttribute("data-movie", movie);

    // add the card element inside the cards-wrapper element
    cardWrapper.append(movieCard);
};
