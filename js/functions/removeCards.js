/*
this function is used to remove all card elements currently in the DOM.
it is used inside the displayShows functions
*/

export function removeCards() {
    let cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
        card.remove();
    });
}
