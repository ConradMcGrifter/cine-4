import { displayShows } from "./displayShows.js";
import { schedule } from "../../schedules/schedule.js";

let friday = document.querySelector("[data-fri]");
let saturday = document.querySelector("[data-sat]");
let sunday = document.querySelector("[data-sun]");
let monday = document.querySelector("[data-mon]");
let tuesday = document.querySelector("[data-tue]");
let wednesday = document.querySelector("[data-wed]");
let thursday = document.querySelector("[data-thu]");

export function displayCurrentDay(day) {
    // remove active style from all tabs -> this prevents more than one tab having active styles when switching between full schedule and detailed view
    document.querySelectorAll(".tab").forEach((tab) => {
        tab.removeAttribute("data-active");
    });

    switch (day) {
        case 0:
            sunday.setAttribute("data-active", "true");
            sunday.querySelector(".tab__day").innerText = "TODAY";
            displayShows("sun", schedule);
            break;

        case 1:
            monday.setAttribute("data-active", "true");
            monday.querySelector(".tab__day").innerText = "TODAY";
            displayShows("mon", schedule);
            break;

        case 2:
            tuesday.setAttribute("data-active", "true");
            tuesday.querySelector(".tab__day").innerText = "TODAY";
            displayShows("tue", schedule);
            break;

        case 3:
            wednesday.setAttribute("data-active", "true");
            wednesday.querySelector(".tab__day").innerText = "TODAY";
            displayShows("wed", schedule);
            break;

        case 4:
            thursday.setAttribute("data-active", "true");
            thursday.querySelector(".tab__day").innerText = "TODAY";
            displayShows("thu", schedule);
            break;

        case 5:
            friday.setAttribute("data-active", "true");
            friday.querySelector(".tab__day").innerText = "TODAY";
            displayShows("fri", schedule);
            break;

        case 6:
            saturday.setAttribute("data-active", "true");
            saturday.querySelector(".tab__day").innerText = "TODAY";
            displayShows("sat", schedule);
            break;
    }
}
