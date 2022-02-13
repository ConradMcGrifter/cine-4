update the movie schedule inside schedule.js
update the date range inside getDates.js (from main.js)

# FUNCTIONS

-   getDates......................function used to get a range of dates between two dates

-   resetHeight...................resets the height of the content element (holds the cards) when cards are removed and added

# FUNCTIONS -> DISPLAY

(these functions handle creating and displaying the movie card elements)

-   createMovieCard.............this function takes parameters from schedule.js and creates the card element + appends to DOM

-   setTrailerSource..............gets all the card trailer elements and adds an event listener "on click" -> adds the data-trailer value to the src of the lightbox iframe. also handles toggling the lightbox from active to inactive

-   displayShows................this function uses the setTrailerSource, createMovieCard, and removeCards functions. it takes a parameter to access a specific movie and day in the schedule.js object
