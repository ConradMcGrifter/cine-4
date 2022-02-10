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

 Usage example:
 
 const dates = getDates(new Date(2022, 1, 11), new Date(2022, 1, 17)); // month is 0 index based

 dates.forEach(function (date) {
    console.log(
        `${date.toString().split(" ")[1]} ${date.toString().split(" ")[2]}`
    );
 });

*/

// found this code from https://gist.github.com/miguelmota/7905510
