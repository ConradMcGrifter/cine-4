import { displayShows, getDates, resetHeight } from "./functions/index.js";

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
let dateRange = getDates(new Date(2022, 1, 11), new Date(2022, 1, 17));
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
        displayShows("sun");
        break;

    case 1:
        monday.setAttribute("data-active", "true");
        monday.querySelector(".tab__day").innerText = "TODAY";
        displayShows("mon");
        break;

    case 2:
        tuesday.setAttribute("data-active", "true");
        tuesday.querySelector(".tab__day").innerText = "TODAY";
        displayShows("tue");
        break;

    case 3:
        wednesday.setAttribute("data-active", "true");
        wednesday.querySelector(".tab__day").innerText = "TODAY";
        displayShows("wed");
        break;

    case 4:
        thursday.setAttribute("data-active", "true");
        thursday.querySelector(".tab__day").innerText = "TODAY";
        displayShows("thu");
        break;

    case 5:
        friday.setAttribute("data-active", "true");
        friday.querySelector(".tab__day").innerText = "TODAY";
        displayShows("fri");
        break;

    case 6:
        saturday.setAttribute("data-active", "true");
        saturday.querySelector(".tab__day").innerText = "TODAY";
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

//----------------------------------------------------------------------------
