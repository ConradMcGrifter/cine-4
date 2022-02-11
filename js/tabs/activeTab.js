import { setCurrentTab } from "./setCurrentTab.js"; // this needs to be imported to set the data-active="true" on the current day

// ---- figure out which days have already passed and make it so the tab cant be clicked on
let tabs = Array.from(document.querySelectorAll(".tab"));
let currentTabIndex;
tabs.forEach((tab) => {
    // find the index of the tab that is set to active based on the current day (this is set by the switch statement on page load)
    if (tab.dataset.active == "true") {
        currentTabIndex = tabs.indexOf(tab);
    }
});

tabs.forEach((tab) => {
    // loop through all the tabs and if a tab comes before the active tab (current day) -> change data-active to be false (this makes it unclickable and lower opacity)
    if (tabs.indexOf(tab) < currentTabIndex) {
        tab.setAttribute("data-active", "false");
    }
});
// -----
// set active tab styles when a tab is clicked on -> ignore tabs that have data-active="false" (grayed out tabs)
tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        for (let i = 0; i < tabs.length; i++) {
            if (tabs[i].dataset.active == "false") {
                continue;
            }
            tabs[i].removeAttribute("data-active");
        }
        tab.setAttribute("data-active", "true");
    });
});

export * as activeTabs from "./activeTab.js";
