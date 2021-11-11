window.addEventListener("scroll", navigationChanging);

function navigationChanging() {
    let navigationBar = document.getElementsByClassName("navigation_bar")[0];
    navigationBar.classList.toggle("scrollingNavigation", window.scrollY > 0);
    let hamburgerMenu = document.getElementsByClassName("hamburgerMenu")[0];
    hamburgerMenu.classList.toggle("scrollHamburger", window.scrollY > 0);

    ////fleet and pricing overlay
    let fleetAndPricing = document.getElementsByClassName(
        "fleetAndPricingOverlay-cont"
    )[0];
    fleetAndPricing.classList.toggle("absolute", window.scrollY > 10);
}