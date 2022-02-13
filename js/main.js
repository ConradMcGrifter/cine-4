import { displayShows, getDates } from "./functions/index.js";

function resetHeight() {
    let content = document.querySelector(".content");
    content.style.minHeight = "auto";
    content.scrollBy(0, 0);
    content.style.minHeight = "100%";
}

// these are the tabs for each day of the week
let friday = document.querySelector("[data-fri]");
let saturday = document.querySelector("[data-sat]");
let sunday = document.querySelector("[data-sun]");
let monday = document.querySelector("[data-mon]");
let tuesday = document.querySelector("[data-tue]");
let wednesday = document.querySelector("[data-wed]");
let thursday = document.querySelector("[data-thu]");

// ----------------------------------------------------------------
/*
use the getDates function to get a range of dates between two dates
then get all the tab elements in an array
then loop through each tab and put in each date from the dateRange array
*/

// set the start and end date for the week of showtimes
export let dateRange = getDates(new Date(2022, 1, 11), new Date(2022, 1, 17));
// get all the date elements from the DOM
let dates = document.querySelectorAll("[data-date]");
// loop through each date and change the innerText to the month and day from the dateRange array
for (let i = 0; i < dates.length; i++) {
    dates[i].innerText = `${dateRange[i].toString().split(" ")[1]} ${
        dateRange[i].toString().split(" ")[2]
    }`;
}
// ----------------------------------------------------------------
/* 
this switch statement receives what the current day is as a parameter and sets 
the active tab based on whatever day it is. then it creates card elements for the specific day
it runs when the page first loads
*/

let d = new Date();
let currentDay = d.getDay();

switch (currentDay) {
    case 0:
        sunday.setAttribute("data-active", "true");
        days.sunday.querySelector(".tab__day").innerText = "TODAY";
        displayShows("sun");
        resetHeight();
        break;

    case 1:
        monday.setAttribute("data-active", "true");
        monday.querySelector(".tab__day").innerText = "TODAY";
        displayShows("mon");
        resetHeight();
        break;

    case 2:
        tuesday.setAttribute("data-active", "true");
        tuesday.querySelector(".tab__day").innerText = "TODAY";
        displayShows("tue");
        resetHeight();
        break;

    case 3:
        wednesday.setAttribute("data-active", "true");
        wednesday.querySelector(".tab__day").innerText = "TODAY";
        displayShows("wed");
        resetHeight();
        break;

    case 4:
        thursday.setAttribute("data-active", "true");
        thursday.querySelector(".tab__day").innerText = "TODAY";
        displayShows("thu");
        resetHeight();
        break;

    case 5:
        friday.setAttribute("data-active", "true");
        friday.querySelector(".tab__day").innerText = "TODAY";
        displayShows("fri");
        resetHeight();
        break;

    case 6:
        saturday.setAttribute("data-active", "true");
        saturday.querySelector(".tab__day").innerText = "TODAY";
        displayShows("sat");
        resetHeight();
        break;
}
// --------------------------------------------------------------------------

/* 
these event listeners Create card elements when specific tab is clicked on by running the displayShows function
*/

let contentWrap = document.querySelector(".content");

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

// --------------------------------------------------------------------------
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

//----------------------------------------------------------------------------
