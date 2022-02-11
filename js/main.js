// import { schedule } from "/js/schedule.js";
import { displayShows, getDates } from "./functions/index.js";
import * as tabJS from "/js/tabs/index.js";

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
