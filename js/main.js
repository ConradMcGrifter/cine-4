import { schedule } from "/js/schedule.js";
import { displayShows, getDates } from "./functions/index.js";
import * as tabJS from "/js/tabs/index.js";

// =================================================================================
// set the start and end date for the week of showtimes
let dateRange = getDates(new Date(2022, 1, 4), new Date(2022, 1, 10));
// get all the date elements from the DOM
let dates = document.querySelectorAll("[data-date]");
// loop through each date and change the innerText to the month and day from the dateRange array
for (let i = 0; i < dates.length; i++) {
    dates[i].innerText = `${dateRange[i].toString().split(" ")[1]} ${
        dateRange[i].toString().split(" ")[2]
    }`;
}
// =================================================================================

// =================================================================================
// Create card elements when specific tab is clicked on
tabJS.days.friday.addEventListener("click", () => {
    displayShows("fri");
});

tabJS.days.saturday.addEventListener("click", () => {
    displayShows("sat");
});

tabJS.days.sunday.addEventListener("click", () => {
    displayShows("sun");
});

tabJS.days.monday.addEventListener("click", () => {
    displayShows("mon");
});

tabJS.days.tuesday.addEventListener("click", () => {
    displayShows("tue");
});

tabJS.days.wednesday.addEventListener("click", () => {
    displayShows("wed");
});

tabJS.days.thursday.addEventListener("click", () => {
    displayShows("thu");
});
// =================================================================================
