import {
    displayShows,
    getDates,
    resetHeight,
    displayCurrentDay,
    openMobileMenu,
    closeMobileMenu,
} from "./functions/index.js";
import { schedule } from "./schedules/schedule.js";
import { nextSchedule } from "./schedules/nextWeekSchedule.js";

/*

************** TABLE OF CONTENTS **************

# TABS
  - these are the tabs for each day of the current week and the following week

# SET DATES RANGE
  - use the getDates function to get a range of dates between two dates
    then get all the tab elements in an array
    then loop through each tab and put in each date from the dateRange array

# CREATE CARDS ON PAGE LOAD
  - this switch statement receives what the current day is as a parameter and sets 
    the active tab based on whatever day it is. then it creates card elements for the specific day
    it runs when the page first loads
    
# SET ACTIVE AND INACTIVE TABS
  - loops through all the tabs and sets them to receive active or inactive styles.

# DISPLAY FULL SHOWTIME SCHEDULE
  - creates a list of all the movies and all the showtimes for the week

# HAMBURGER MOBILE MENU
  - logic for opening and closing the mobile nav menu

# TAB EVENT LISTENERS
  - (these event listeners Create card elements when specific tab is clicked on by running the displayShows function)
  # CURRENT WEEK
  # NEXT WEEK

# TABS WRAPPER SCROLL
  - when a tab is partially overflowing the tab wrapper and it is clicked on, this code will scroll the tab into view


*************************************************
*/

// ------------------# TABS ------------------------------------------

/*--------------------------------------------
            CURRENT WEEK TABS
--------------------------------------------*/
let friday = document.querySelector("[data-fri]");
let saturday = document.querySelector("[data-sat]");
let sunday = document.querySelector("[data-sun]");
let monday = document.querySelector("[data-mon]");
let tuesday = document.querySelector("[data-tue]");
let wednesday = document.querySelector("[data-wed]");
let thursday = document.querySelector("[data-thu]");

/*--------------------------------------------
            NEXT WEEK TABS
--------------------------------------------*/
let nextFriday = document.querySelector("[data-next-fri]");
let nextSaturday = document.querySelector("[data-next-sat]");
let nextSunday = document.querySelector("[data-next-sun]");
let nextMonday = document.querySelector("[data-next-mon]");
let nextTuesday = document.querySelector("[data-next-tue]");
let nextWednesday = document.querySelector("[data-next-wed]");
let nextThursday = document.querySelector("[data-next-thu]");

// ------------------# SET DATE RANGE----------------------------------------

// set the start and end date for the week of showtimes
let dateRange = getDates(new Date(2022, 1, 25), new Date(2022, 2, 10));
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

displayCurrentDay(currentDay);

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
        // tab.setAttribute("data-active", "false");
        tab.remove();
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
let tabsWrap = document.querySelector("[data-tabs-wrap]");

scheduleBtn.addEventListener("click", () => {
    // when clicked, change the inner text of the schedule button
    scheduleBtn.innerText = "View Movies By Day";

    // create header with the date range for the full schedule
    let fullScheduleHeader = document.createElement("div");
    fullScheduleHeader.setAttribute("data-schedule-header", null);
    let fullScheduleTitle = document.createElement("h2");
    fullScheduleTitle.setAttribute("data-schedule-header-title", null);

    // remove all cards in the DOM
    let cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
        card.remove();
    });

    resetHeight();

    // if the container already has the schedule in it -> remove full schedule and create movie cards, then return.
    if (container.querySelectorAll("[data-schedule-movie--wrap]").length > 0) {
        scheduleBtn.innerText = "View Full Schedule";
        // if the full schedule of showtimes is displayed -> remove it
        let fullShowtimes = document.querySelectorAll(
            "[data-schedule-movie--wrap]"
        );
        fullShowtimes.forEach((movie) => {
            movie.remove();
        });

        // remove the header for the full schedule
        document.querySelector("[data-schedule-header]").remove();

        // display tabs
        tabsWrap.removeAttribute("data-visibility");

        // display the cards for the movies of the current day
        displayCurrentDay(currentDay);
        // set the date for all the movie card headers back to the current day
        document
            .querySelectorAll("[data-showtime-header]")
            .forEach((header) => {
                console.log("wtf");
                header.textContent = `Showtimes ${d.toString().split(" ")[1]} ${
                    d.toString().split(" ")[2]
                }`;
            });

        // if on mobile, this will close the mobile menu + lightbox
        closeMobileMenu();
        return;
    }

    // if on mobile, this will close the mobile menu + lightbox
    closeMobileMenu();

    // hide tabs
    tabsWrap.setAttribute("data-visibility", "hidden");

    fullScheduleTitle.innerText = `Showtimes ${
        dateRange[0].toString().split(" ")[1]
    } ${dateRange[0].toString().split(" ")[2]}\u00A0--\u00A0${
        dateRange[6].toString().split(" ")[1]
    } ${dateRange[6].toString().split(" ")[2]}`;

    fullScheduleHeader.append(fullScheduleTitle);
    tabsWrap.append(fullScheduleHeader);

    //remove error message for day with no showtimes
    document.querySelector("[data-error]").removeAttribute("data-visibility");

    // loop through each movie in the schedule object
    for (let movie in schedule) {
        // this variable is used to access the days in the dateRange array
        let dayCounter = 0;

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
            // if the day doesn't have any showtimes -> increase dayCounter then skip it
            if (schedule[movie].showtimes[day][0] === "") {
                dayCounter++;
                continue;
            }
            // create the elements
            let dayWrap = document.createElement("div");
            let weekday = document.createElement("h3");

            // add the (month + day) + the day of the week then icrease dayCounter by 1
            weekday.innerText = `${
                dateRange[dayCounter].toString().split(" ")[1]
            } ${
                dateRange[dayCounter].toString().split(" ")[2]
            }\u00A0/\u00A0${day}: `;
            dayWrap.append(weekday);

            dayCounter++;

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

hamburger.addEventListener("click", () => {
    openMobileMenu();
});

mobileCloseBtn.addEventListener("click", () => {
    closeMobileMenu();
});

// ------------------# TAB EVENT LISTENERS-----------------------------------------------

/*--------------------------------------------
            CURRENT WEEK
--------------------------------------------*/

friday.addEventListener("click", () => {
    displayShows("fri", schedule);
    resetHeight();
});

saturday.addEventListener("click", () => {
    displayShows("sat", schedule);
    resetHeight();
});

sunday.addEventListener("click", () => {
    displayShows("sun", schedule);
    resetHeight();
});

monday.addEventListener("click", () => {
    displayShows("mon", schedule);
    resetHeight();
});

tuesday.addEventListener("click", () => {
    displayShows("tue", schedule);
    resetHeight();
});

wednesday.addEventListener("click", () => {
    displayShows("wed", schedule);
    resetHeight();
});

thursday.addEventListener("click", () => {
    displayShows("thu", schedule);
    resetHeight();
});

/*--------------------------------------------
            NEXT WEEK
--------------------------------------------*/

nextFriday.addEventListener("click", () => {
    displayShows("fri", nextSchedule);
    resetHeight();
});

nextSaturday.addEventListener("click", () => {
    displayShows("sat", nextSchedule);
    resetHeight();
});

nextSunday.addEventListener("click", () => {
    displayShows("sun", nextSchedule);
    resetHeight();
});

nextMonday.addEventListener("click", () => {
    displayShows("mon", nextSchedule);
    resetHeight();
});

nextTuesday.addEventListener("click", () => {
    displayShows("tue", nextSchedule);
    resetHeight();
});

nextWednesday.addEventListener("click", () => {
    displayShows("wed", nextSchedule);
    resetHeight();
});

nextThursday.addEventListener("click", () => {
    displayShows("thu", nextSchedule);
    resetHeight();
});

// ------------------# TABS WRAPPER SCROLL-----------------------------------------------

let tabsWrapper = document.querySelector("[data-tabs-wrap]");
let weekdayTabs = document.querySelectorAll(".tab");

function scrollTabIntoView() {
    let bounding = tabsWrapper.getBoundingClientRect();

    if (this.getBoundingClientRect().right > bounding.right) {
        this.scrollIntoView({
            // behavior: "smooth",
            inline: "end",
            block: "nearest",
        });
    }

    if (this.getBoundingClientRect().left < bounding.left) {
        this.scrollIntoView({
            // behavior: "smooth",
            inline: "start",
            block: "nearest",
        });
        // tabsWrapper.scrollBy(25, 0);
    }
}

weekdayTabs.forEach((tab) => {
    tab.addEventListener("click", scrollTabIntoView);
});

// use mousewheel to scroll through the tabs wrapper
tabsWrapper.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    tabsWrapper.scrollLeft += evt.deltaY;
});
