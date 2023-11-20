// ==UserScript==
// @name         PoE-Any-Default
// @namespace    https://github.com/D4Enjoyer/PoE-Any-Default/blob/main/PoE-Any-Default.js
// @version      0.2
// @description  Sets the default Sale Type to "Any" on Path of Exile Trade
// @author       A God Gamer with his dear friends Google-search and ChatGPT
// @match        https://www.pathofexile.com/*
// @grant        none
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==

(function() {
    'use strict';

    // Function to select "Any" option under "Sale Type" filter
    function selectAnyOption(jNode) {
        const title = jNode[0];

        if (title.textContent.trim() === 'Sale Type') {
            const multiselectWrapper = title.parentElement.querySelector('.multiselect__content-wrapper');

            // Check if multiselect is present and not already activated
            if (multiselectWrapper && !multiselectWrapper.parentElement.classList.contains('multiselect--above')) {
                // Simulate click to activate the multiselect
                title.click();
                console.log('Clicked on multiselect to activate it');

                // Find and click the "Any" option under "Sale Type" filter
                const anyOption = multiselectWrapper.querySelector('.multiselect__element span[data-select=""] span');
                if (anyOption && anyOption.textContent.trim() === 'Any') {
                    anyOption.click();
                    console.log('Clicked on "Any" option under "Sale Type"');
                }
            }
        }
    }

    // Wait for "Sale Type" element to appear and select the "Any" option
    waitForKeyElements('.filter-title', selectAnyOption);
})();
