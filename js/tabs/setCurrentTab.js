import * as days from "./dayTabs.js";
import { displayShows } from "/js/functions/displayShows.js";

let d = new Date();
let currentDay = d.getDay();

switch (currentDay) {
    case 0:
        days.sunday.setAttribute("data-active", "true");
        days.sunday.querySelector(".tab__day").innerText = "TODAY";
        displayShows("sun");
        break;

    case 1:
        days.monday.setAttribute("data-active", "true");
        days.monday.querySelector(".tab__day").innerText = "TODAY";
        displayShows("mon");
        break;

    case 2:
        days.tuesday.setAttribute("data-active", "true");
        days.tuesday.querySelector(".tab__day").innerText = "TODAY";
        displayShows("tue");
        break;

    case 3:
        days.wednesday.setAttribute("data-active", "true");
        days.wednesday.querySelector(".tab__day").innerText = "TODAY";
        displayShows("wed");
        break;

    case 4:
        days.thursday.setAttribute("data-active", "true");
        days.thursday.querySelector(".tab__day").innerText = "TODAY";
        displayShows("thu");
        break;

    case 5:
        days.friday.setAttribute("data-active", "true");
        days.friday.querySelector(".tab__day").innerText = "TODAY";
        displayShows("fri");
        break;

    case 6:
        days.saturday.setAttribute("data-active", "true");
        days.saturday.querySelector(".tab__day").innerText = "TODAY";
        displayShows("sat");
        break;
}

export * as setCurrentTab from "./setCurrentTab.js";
