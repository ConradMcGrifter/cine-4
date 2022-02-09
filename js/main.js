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

const setTrailerSource = () => {
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
};

friday.addEventListener("click", () => {
    // remove all cards currently in the DOM
    removeCards();
    // loop through the movie objects in schedule object
    for (let movie in schedule) {
        // if the movie object has show times for the specific day, create card ele + add showtimes
        if (schedule[movie].showtimes.fri[0] != "") {
            createMovieCard(movie, "fri");
            setTrailerSource();
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
            setTrailerSource();
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
            setTrailerSource();
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
            setTrailerSource();
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
            setTrailerSource();
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
            setTrailerSource();
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
            setTrailerSource();
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
                setTrailerSource();
            }
        }
        break;

    case 1:
        monday.setAttribute("data-active", "true");
        for (let movie in schedule) {
            if (schedule[movie].showtimes.mon[0] != "") {
                createMovieCard(movie, "mon");
                setTrailerSource();
            }
        }
        break;

    case 2:
        tuesday.setAttribute("data-active", "true");
        for (let movie in schedule) {
            if (schedule[movie].showtimes.tue[0] != "") {
                createMovieCard(movie, "tue");
                setTrailerSource();
            }
        }
        break;

    case 3:
        wednesday.setAttribute("data-active", "true");
        for (let movie in schedule) {
            if (schedule[movie].showtimes.wed[0] != "") {
                createMovieCard(movie, "wed");
                setTrailerSource();
            }
        }
        break;

    case 4:
        thursday.setAttribute("data-active", "true");
        for (let movie in schedule) {
            if (schedule[movie].showtimes.thu[0] != "") {
                createMovieCard(movie, "thu");
                setTrailerSource();
            }
        }
        break;

    case 5:
        friday.setAttribute("data-active", "true");
        for (let movie in schedule) {
            if (schedule[movie].showtimes.fri[0] != "") {
                createMovieCard(movie, "fri");
                setTrailerSource();
            }
        }
        break;

    case 6:
        saturday.setAttribute("data-active", "true");
        for (let movie in schedule) {
            if (schedule[movie].showtimes.sat[0] != "") {
                createMovieCard(movie, "sat");
                setTrailerSource();
            }
        }
        break;
}

// ---- figure out which days have already passed and make it so the tab cant be clicked on
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
