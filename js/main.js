import { schedule } from "/js/schedule.js";
import { createMovieCard } from "/js/functions/createMovieCard.js";

let d = new Date();
let currentDay = d.getDay();
console.log(d.getDate());
console.log(d.toString().split(" ")[1], d.toString().split(" ")[2]);

// these are the tabs for each day of the week
let friday = document.querySelector("[data-fri]");
let saturday = document.querySelector("[data-sat]");
let sunday = document.querySelector("[data-sun]");
let monday = document.querySelector("[data-mon]");
let tuesday = document.querySelector("[data-tue]");
let wednesday = document.querySelector("[data-wed]");
let thursday = document.querySelector("[data-thu]");

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

// ---- figure out which days have already passed and make it so they cant be clicked on
let tabs = Array.from(document.querySelectorAll(".tab"));
let currentTabIndex;
tabs.forEach((tab) => {
    if (tab.dataset.active == "true") {
        currentTabIndex = tabs.indexOf(tab);
    }
});

tabs.forEach((tab) => {
    if (tabs.indexOf(tab) < currentTabIndex) {
        tab.setAttribute("data-active", "false");
    }
});
// -----
