/*
this function is used inside the main.js file TAB EVENT LISTENERS
it resets the height of the content container when a new day is clicked on. this was needed
because on mobile, if one day had 7 movies, then another day had only 4 movies, there would be empty space
that was left over from the day that had 7 movies when switching between these days
*/
export function resetHeight() {
    let content = document.querySelector(".content");
    content.setAttribute("data-height-reset", null);
    content.scrollBy(0, 0);
    content.removeAttribute("data-height-reset");
}
