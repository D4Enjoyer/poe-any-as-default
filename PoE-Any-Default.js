// ==UserScript==
// @name         PoE-Any-Default
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Sets the default Sale Type to "Any" on Path of Exile Trade
// @author       A God Gamer with his dear friends Google-search and ChatGPT
// @match        https://www.pathofexile.com/trade/*
// @grant        none
// ==/UserScript==

// Function to activate multiselect and select "Any"
function activateAndSelectAny() {
    const saleTypeTitles = document.querySelectorAll('.filter-title');

    // Loop through all filter titles
    saleTypeTitles.forEach((title) => {
        if (title.textContent.trim() === 'Sale Type') {
            const multiselectWrapper = title.parentElement.querySelector('.multiselect__content-wrapper');

            // Check if multiselect is present and not already activated
            if (multiselectWrapper && !multiselectWrapper.parentElement.classList.contains('multiselect--above')) {
                // Simulate click to activate the multiselect
                title.click();
                console.log('Clicked on multiselect');

                // Timeout to wait for the multiselect to appear after click
                setTimeout(() => {
                    // Select "Any" option by finding and clicking on the respective element
                    const anyOption = multiselectWrapper.querySelector('.multiselect__element [data-select=""]');
                    if (anyOption) {
                        anyOption.click();
                        console.log('Clicked on "Any" option');
                    }
                }, 500); // Adjust timeout duration as needed
            }
        }
    });
}

// Wait for one second after page load
setTimeout(activateAndSelectAny, 1000);
