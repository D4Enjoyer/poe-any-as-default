// ==UserScript==
// @name         poe-any-as-default
// @namespace    https://github.com/D4Enjoyer/poe-any-as-default
// @version      1.1
// @description  Sets the default Sale Type to "Any" on Path of Exile Trade
// @author       A God Gamer with his dear friend ChatGPT
// @icon         https://www.google.com/s2/favicons?sz=64&domain=pathofexile.com
// @match        https://www.pathofexile.com/*
// @grant        none
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==

// Function to select "Any" option under "Sale Type" filter
function selectAnyOption(jNode) {
    // Extract the DOM element containing the text "Sale Type"
    const title = jNode[0];

    // Check if the element contains "Sale Type"
    if (title.textContent.trim() === 'Sale Type') {
        // Find the wrapper for the multiselect dropdown
        const multiselectWrapper = title.parentElement.querySelector('.multiselect__content-wrapper');

        // Check if the multiselect exists and is not active
        if (multiselectWrapper && !multiselectWrapper.parentElement.classList.contains('multiselect--above')) {
            // Click to activate the multiselect dropdown
            title.click();
            console.log('Clicked on multiselect to activate it');

            // Find and click the "Any" option under "Sale Type"
            const anyOption = multiselectWrapper.querySelector('.multiselect__element span[data-select=""] span');
            if (anyOption && anyOption.textContent.trim() === 'Any') {
                anyOption.click();
                console.log('Clicked on "Any" option under "Sale Type"');
            }
        }
    }
}

// Wait for ".filter-title" that contains "Sale Type" to appear and select the "Any" option
(function($) {
    'use strict';

    // Use waitForKeyElements utility to wait for the specific element to appear
    waitForKeyElements('.filter-title:contains("Sale Type")', selectAnyOption);
})(jQuery);
