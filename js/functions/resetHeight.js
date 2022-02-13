export function resetHeight() {
    let content = document.querySelector(".content");
    content.setAttribute("data-height-reset", null);
    content.scrollBy(0, 0);
    content.removeAttribute("data-height-reset");
}
