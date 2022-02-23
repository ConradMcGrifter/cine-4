import { displayShows, getDates, resetHeight } from "./functions/index.js";
import { schedule } from "./schedule.js";

/*

************** TABLE OF CONTENTS **************

# TABS
  - these are the tabs for each day of the week

# SET DATES RANGE
  - use the getDates function to get a range of dates between two dates
    then get all the tab elements in an array
    then loop through each tab and put in each date from the dateRange array

# CREATE CARDS ON PAGE LOAD
  - this switch statement receives what the current day is as a parameter and sets 
    the active tab based on whatever day it is. then it creates card elements for the specific day
    it runs when the page first loads

# TAB EVENT LISTENERS
  - these event listeners Create card elements when specific tab is clicked on by running the displayShows function

# SET ACTIVE AND INACTIVE TABS
  - loops through all the tabs and sets them to receive active or inactive styles.

# DISPLAY FULL SHOWTIME SCHEDULE
  - creates a list of all the movies and all the showtimes for the week

# HAMBURGER MOBILE MENU

*/

// ------------------# TABS ------------------------------------------

// these are the tabs for each day of the week
let friday = document.querySelector("[data-fri]");
let saturday = document.querySelector("[data-sat]");
let sunday = document.querySelector("[data-sun]");
let monday = document.querySelector("[data-mon]");
let tuesday = document.querySelector("[data-tue]");
let wednesday = document.querySelector("[data-wed]");
let thursday = document.querySelector("[data-thu]");

// ------------------# SET DATE RANGE----------------------------------------

// set the start and end date for the week of showtimes
let dateRange = getDates(new Date(2022, 1, 18), new Date(2022, 1, 24));
// get all the date elements from the DOM
let dates = document.querySelectorAll("[data-date]");
// loop through each date and change the innerText to the month and day from the dateRange array
for (let i = 0; i < dates.length; i++) {
    dates[i].innerText = `${dateRange[i].toString().split(" ")[1]} ${
        dateRange[i].toString().split(" ")[2]
    }`;
}
// ------------------# CREATE CARDS ON PAGE LOAD-------------------------------------

let d = new Date();
let currentDay = d.getDay();

switch (currentDay) {
    case 0:
        sunday.setAttribute("data-active", "true");
        sunday.querySelector(".tab__day").innerText = "TODAY";
        sunday.scrollIntoView({ behavior: "smooth", inline: "start" });

        displayShows("sun");
        break;

    case 1:
        monday.setAttribute("data-active", "true");
        monday.querySelector(".tab__day").innerText = "TODAY";
        monday.scrollIntoView({ behavior: "smooth", inline: "start" });
        displayShows("mon");
        break;

    case 2:
        tuesday.setAttribute("data-active", "true");
        tuesday.querySelector(".tab__day").innerText = "TODAY";
        tuesday.scrollIntoView({ behavior: "smooth", inline: "start" });
        displayShows("tue");
        break;

    case 3:
        wednesday.setAttribute("data-active", "true");
        wednesday.querySelector(".tab__day").innerText = "TODAY";
        wednesday.scrollIntoView({ behavior: "smooth", inline: "start" });
        displayShows("wed");
        break;

    case 4:
        thursday.setAttribute("data-active", "true");
        thursday.querySelector(".tab__day").innerText = "TODAY";
        thursday.scrollIntoView({ behavior: "smooth", inline: "start" });
        displayShows("thu");
        break;

    case 5:
        friday.setAttribute("data-active", "true");
        friday.querySelector(".tab__day").innerText = "TODAY";
        friday.scrollIntoView({ behavior: "smooth", inline: "start" });
        displayShows("fri");
        break;

    case 6:
        saturday.setAttribute("data-active", "true");
        saturday.querySelector(".tab__day").innerText = "TODAY";
        saturday.scrollIntoView({ behavior: "smooth", inline: "start" });
        displayShows("sat");
        break;
}
// ------------------# TAB EVENT LISTENERS-----------------------------------------------

friday.addEventListener("click", () => {
    displayShows("fri");
    resetHeight();
});

saturday.addEventListener("click", () => {
    displayShows("sat");
    resetHeight();
});

sunday.addEventListener("click", () => {
    displayShows("sun");
    resetHeight();
});

monday.addEventListener("click", () => {
    displayShows("mon");
    resetHeight();
});

tuesday.addEventListener("click", () => {
    displayShows("tue");
    resetHeight();
});

wednesday.addEventListener("click", () => {
    displayShows("wed");
    resetHeight();
});

thursday.addEventListener("click", () => {
    displayShows("thu");
    resetHeight();
});

// ------------------# SET ACTIVE AND INACTIVE TABS---------------------------------------

// figure out which days have already passed and make it so the tab cant be clicked on
let tabs = Array.from(document.querySelectorAll(".tab"));
let currentTabIndex;

tabs.forEach((tab) => {
    // find the index of the tab that is set to active based on the current day (this is set by the switch statement on page load)
    if (tab.dataset.active == "true") {
        currentTabIndex = tabs.indexOf(tab);
    }
});

// loop through all the tabs
tabs.forEach((tab) => {
    // if the tab comes before the tab that is set to active on page load by the switch statement -> set its data-active attribute to false
    if (tabs.indexOf(tab) < currentTabIndex) {
        tab.setAttribute("data-active", "false");
    }
    // set active tab styles when a tab is clicked on -> ignore tabs that have data-active="false" (grayed out tabs)
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

// ------------------# DISPLAY FULL SHOWTIME SCHEDULE----------------------------------------

let scheduleBtn = document.querySelector("[data-schedule-button]");
let container = document.querySelector("[data-cards-wrapper]");

scheduleBtn.addEventListener("click", () => {
    // if on mobile, this will close the mobile menu + lightbox
    mobileMenu.removeAttribute("data-display");
    lightbox.removeAttribute("data-display");
    lightboxCloseBtn.removeAttribute("data-visibility");

    // remove all cards in the DOM
    let cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
        card.remove();
    });

    resetHeight();

    // if the container already has the schedule in it, return.
    if (container.querySelectorAll("[data-schedule-movie--wrap]").length > 0) {
        return;
    }

    // loop through each movie in the schedule object
    for (let movie in schedule) {
        // create the elements
        let movieTitle = document.createElement("h2");
        let movieWrap = document.createElement("div");

        // add the movie title from the movie object into the created elements
        movieTitle.innerText = schedule[movie].title;

        // add data attribute for styling
        movieTitle.setAttribute("data-schedule-title", null);
        movieWrap.setAttribute("data-schedule-movie--wrap", null);

        movieWrap.append(movieTitle);
        container.append(movieWrap);

        // loop through each day in the movie object
        for (let day in schedule[movie].showtimes) {
            // if the day doesn't have any showtimes -> skip it
            if (schedule[movie].showtimes[day][0] === "") {
                continue;
            }
            // create the elements
            let dayWrap = document.createElement("div");
            let weekday = document.createElement("h3");

            // add the content from the schedule movie object into the created elements
            weekday.innerText = `${day}: `;
            dayWrap.append(weekday);

            // set data attributes for styling
            weekday.setAttribute("data-schedule-day", null);
            dayWrap.setAttribute("data-schedule-day--wrap", null);

            movieWrap.append(dayWrap);

            // loop through all the times
            for (let i = 0; i < schedule[movie].showtimes[day].length; i++) {
                let time = document.createElement("p");
                time.setAttribute("data-schedule-time", null);
                // check if the time is the last one in the array
                // if it is the last time, dont add an ","
                if (i + 1 == schedule[movie].showtimes[day].length) {
                    time.innerText = `\u00A0 ${schedule[movie].showtimes[day][i]}`;
                } else {
                    time.innerText = `\u00A0 ${schedule[movie].showtimes[day][i]},`;
                }
                dayWrap.append(time);
            }
        }
    }
});

// ------------------# HAMBURGER MOBILE MENU----------------------------------------

const hamburger = document.querySelector(".header__hamburger");
const mobileCloseBtn = document.querySelector(".header__closeBtn");
const mobileMenu = document.querySelector(".header__links");
const lightbox = document.querySelector(".lightbox");
const lightboxCloseBtn = document.querySelector(".lightbox__close");

hamburger.addEventListener("click", () => {
    mobileMenu.setAttribute("data-display", "visible");
    lightbox.setAttribute("data-display", "true");
    // since this uses the same lightbox that the trailers use, the lightbox close button needs to be hidden
    lightboxCloseBtn.setAttribute("data-visibility", "hidden");
});

mobileCloseBtn.addEventListener("click", () => {
    mobileMenu.removeAttribute("data-display");
    lightbox.removeAttribute("data-display");
    lightboxCloseBtn.removeAttribute("data-visibility");
});
