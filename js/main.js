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

const displayShows = (day) => {
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
};

friday.addEventListener("click", () => {
    displayShows("fri");
});

saturday.addEventListener("click", () => {
    displayShows("sat");
});

sunday.addEventListener("click", () => {
    displayShows("sun");
});

monday.addEventListener("click", () => {
    displayShows("mon");
});

tuesday.addEventListener("click", () => {
    displayShows("tue");
});

wednesday.addEventListener("click", () => {
    displayShows("wed");
});

thursday.addEventListener("click", () => {
    displayShows("thu");
});

switch (currentDay) {
    case 0:
        sunday.setAttribute("data-active", "true");
        displayShows("sun");
        break;

    case 1:
        monday.setAttribute("data-active", "true");
        displayShows("mon");
        break;

    case 2:
        tuesday.setAttribute("data-active", "true");
        displayShows("tue");
        break;

    case 3:
        wednesday.setAttribute("data-active", "true");
        displayShows("wed");
        break;

    case 4:
        thursday.setAttribute("data-active", "true");
        displayShows("thu");
        break;

    case 5:
        friday.setAttribute("data-active", "true");
        displayShows("fri");
        break;

    case 6:
        saturday.setAttribute("data-active", "true");
        displayShows("sat");
        break;
}

// ---- figure out which days have already passed and make it so the tab cant be clicked on
let tabs = Array.from(document.querySelectorAll(".tab"));
let currentTabIndex;
tabs.forEach((tab) => {
    // find the index of the tab that is set to active based on the current day (this is set by the switch statement on page load)
    if (tab.dataset.active == "true") {
        currentTabIndex = tabs.indexOf(tab);
    }
});

tabs.forEach((tab) => {
    // loop through all the tabs and if a tab comes before the active tab (current day) -> change data-active to be false (this makes it unclickable and lower opacity)
    if (tabs.indexOf(tab) < currentTabIndex) {
        tab.setAttribute("data-active", "false");
    }
});
// -----
// set active tab styles when a tab is clicked on -> ignore tabs that have data-active="false" (grayed out tabs)
tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        for (let i = 0; i < tabs.length; i++) {
            if (tabs[i].dataset.active == "false") {
                continue;
            }
            tabs[i].removeAttribute("data-active");
        }
        tab.setAttribute("data-active", "true");
    });
});
