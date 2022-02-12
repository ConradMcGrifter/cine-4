export function setCardShowtimeDate(date) {
    let headers = document.querySelectorAll("[data-showtime-header]");
    headers.forEach((header) => {
        header.textContent += date;
    });
}
