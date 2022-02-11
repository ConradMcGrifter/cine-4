export function removeCards() {
    let cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
        card.remove();
    });
}
