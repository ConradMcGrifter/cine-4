import { schedule } from "/js/schedule.js";
import * as functions from "/js/functions/index.js";
import * as tabJS from "/js/tabs/index.js";

tabJS.setCurrentTab(tabJS.currentDay); // set the active tab based on the current day
tabJS.activeTab(); // figure out which days have already passed and make them unclickable + change active tab on click
// --------------------------------------------------

// set the start and end date for the week of showtimes
let dateRange = functions.getDates(new Date(2022, 1, 4), new Date(2022, 1, 10));
// get all the date elements from the DOM
let dates = document.querySelectorAll("[data-date]");
// loop through each date and change the innerText to the month and day from the dateRange array
for (let i = 0; i < dates.length; i++) {
    dates[i].innerText = `${dateRange[i].toString().split(" ")[1]} ${
        dateRange[i].toString().split(" ")[2]
    }`;
}

// ------- Create card elements when specific tab is clicked on --------------
tabJS.days.friday.addEventListener("click", () => {
    functions.displayShows("fri");
});

tabJS.days.saturday.addEventListener("click", () => {
    functions.displayShows("sat");
});

tabJS.days.sunday.addEventListener("click", () => {
    functions.displayShows("sun");
});

tabJS.days.monday.addEventListener("click", () => {
    functions.displayShows("mon");
});

tabJS.days.tuesday.addEventListener("click", () => {
    functions.displayShows("tue");
});

tabJS.days.wednesday.addEventListener("click", () => {
    functions.displayShows("wed");
});

tabJS.days.thursday.addEventListener("click", () => {
    functions.displayShows("thu");
});
