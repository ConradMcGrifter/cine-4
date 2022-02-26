const mobileMenu = document.querySelector(".header__links");
const lightbox = document.querySelector(".lightbox");
const lightboxCloseBtn = document.querySelector(".lightbox__close");

export function openMobileMenu() {
    mobileMenu.setAttribute("data-display", "visible");
    lightbox.setAttribute("data-display", "true");
    // since this uses the same lightbox that the trailers use, the lightbox close button needs to be hidden
    lightboxCloseBtn.setAttribute("data-visibility", "hidden");
}

export function closeMobileMenu() {
    mobileMenu.removeAttribute("data-display");
    lightbox.removeAttribute("data-display");
    lightboxCloseBtn.removeAttribute("data-visibility");
}
