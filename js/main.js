import { schedule } from "/js/schedule.js";

let d = new Date();
let currentDay = d.getDay();
console.log(d.getDate());
console.log(d.toString().split(" ")[1], d.toString().split(" ")[2]);

let friday = document.querySelector("[data-fri]");
let saturday = document.querySelector("[data-sat]");
let sunday = document.querySelector("[data-sun]");
let monday = document.querySelector("[data-mon]");
let tuesday = document.querySelector("[data-tue]");
let wednesday = document.querySelector("[data-wed]");
let thursday = document.querySelector("[data-thu]");

let movieCardTemplate = document.querySelector("[data-movieCard-template]");
let cardWrapper = document.querySelector("[data-cards-wrapper]");

const createMovieCard = (movie, day) => {
    let movieObj = schedule[movie];

    let movieCard = movieCardTemplate.content.cloneNode(true).children[0];
    let timesWrapper = movieCard.querySelector("[data-times-wrapper]");

    let title = movieCard.querySelector("[data-title]");
    let poster = movieCard.querySelector("[data-poster]");
    let synopsis = movieCard.querySelector("[data-synopsis]");

    title.textContent = movieObj.title;
    poster.src = `${movieObj.poster}`;
    synopsis.textContent = movieObj.synopsis;

    movieObj.showtimes[day].forEach((time) => {
        let showtime = document.createElement("div");
        showtime.setAttribute("data-card__time", null);
        showtime.innerText = time;
        timesWrapper.append(showtime);
    });

    movieCard.setAttribute("data-movie", movie);

    cardWrapper.append(movieCard);
};

const removeCards = () => {
    let cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
        card.remove();
    });
};

friday.addEventListener("click", () => {
    // remove all cards currently in the DOM
    removeCards();
    // loop through the movie objects in schedule object
    for (let movie in schedule) {
        // if the movie object has show times for the specific day, create card ele + add showtimes
        if (schedule[movie].showtimes.fri[0] != "") {
            createMovieCard(movie, "fri");
        }
    }
});

saturday.addEventListener("click", () => {
    // remove all cards currently in the DOM
    removeCards();
    // loop through the movie objects in schedule object
    for (let movie in schedule) {
        // if the movie object has show times for the specific day, create card ele + add showtimes
        if (schedule[movie].showtimes.sat[0] != "") {
            createMovieCard(movie, "sat");
        }
    }
});

sunday.addEventListener("click", () => {
    // remove all cards currently in the DOM
    removeCards();
    // loop through the movie objects in schedule object
    for (let movie in schedule) {
        // if the movie object has show times for the specific day, create card ele + add showtimes
        if (schedule[movie].showtimes.sun[0] != "") {
            createMovieCard(movie, "sun");
        }
    }
});

monday.addEventListener("click", () => {
    // remove all cards currently in the DOM
    removeCards();
    // loop through the movie objects in schedule object
    for (let movie in schedule) {
        // if the movie object has show times for the specific day, create card ele + add showtimes
        if (schedule[movie].showtimes.mon[0] != "") {
            createMovieCard(movie, "mon");
        }
    }
});

tuesday.addEventListener("click", () => {
    // remove all cards currently in the DOM
    removeCards();
    // loop through the movie objects in schedule object
    for (let movie in schedule) {
        // if the movie object has show times for the specific day, create card ele + add showtimes
        if (schedule[movie].showtimes.tue[0] != "") {
            createMovieCard(movie, "tue");
        }
    }
});

wednesday.addEventListener("click", () => {
    // remove all cards currently in the DOM
    removeCards();
    // loop through the movie objects in schedule object
    for (let movie in schedule) {
        // if the movie object has show times for the specific day, create card ele + add showtimes
        if (schedule[movie].showtimes.wed[0] != "") {
            createMovieCard(movie, "wed");
        }
    }
});

thursday.addEventListener("click", () => {
    // remove all cards currently in the DOM
    removeCards();
    // loop through the movie objects in schedule object
    for (let movie in schedule) {
        // if the movie object has show times for the specific day, create card ele + add showtimes
        if (schedule[movie].showtimes.thu[0] != "") {
            createMovieCard(movie, "thu");
        }
    }
});

switch (currentDay) {
    case 0:
        sunday.setAttribute("data-active", "true");
        // loop through the movie objects in schedule object
        for (let movie in schedule) {
            // if the movie object has show times for the specific day, create card ele + add showtimes
            if (schedule[movie].showtimes.sun[0] != "") {
                createMovieCard(movie, "sun");
            }
        }
        break;

    case 1:
        monday.setAttribute("data-active", "true");
        for (let movie in schedule) {
            if (schedule[movie].showtimes.mon[0] != "") {
                createMovieCard(movie, "mon");
            }
        }
        break;

    case 2:
        tuesday.setAttribute("data-active", "true");
        for (let movie in schedule) {
            if (schedule[movie].showtimes.tue[0] != "") {
                createMovieCard(movie, "tue");
            }
        }
        break;

    case 3:
        wednesday.setAttribute("data-active", "true");
        for (let movie in schedule) {
            if (schedule[movie].showtimes.wed[0] != "") {
                createMovieCard(movie, "wed");
            }
        }
        break;

    case 4:
        thursday.setAttribute("data-active", "true");
        for (let movie in schedule) {
            if (schedule[movie].showtimes.thu[0] != "") {
                createMovieCard(movie, "thu");
            }
        }
        break;

    case 5:
        friday.setAttribute("data-active", "true");
        for (let movie in schedule) {
            if (schedule[movie].showtimes.fri[0] != "") {
                createMovieCard(movie, "fri");
            }
        }
        break;

    case 6:
        saturday.setAttribute("data-active", "true");
        for (let movie in schedule) {
            if (schedule[movie].showtimes.sat[0] != "") {
                createMovieCard(movie, "sat");
            }
        }
        break;
}
