// found this code from https://gist.github.com/miguelmota/7905510

// Returns an array of dates between the two dates
export function getDates(startDate, endDate) {
    const dates = [];
    let currentDate = startDate;
    const addDays = function (days) {
        const date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
    };
    while (currentDate <= endDate) {
        dates.push(currentDate);
        currentDate = addDays.call(currentDate, 1);
    }
    return dates;
}

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
