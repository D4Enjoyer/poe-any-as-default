// ==UserScript==
// @name         poe-any-as-default
// @namespace    https://github.com/D4Enjoyer/poe-any-as-default
// @version      1.3
// @description  Sets the default Sale Type to "Any" on Path of Exile Trade
// @author       A God Gamer with his dear friend ChatGPT
// @icon         https://www.google.com/s2/favicons?sz=64&domain=pathofexile.com
// @match        https://www.pathofexile.com/trade*
// @grant        none
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @require      https://cdn.jsdelivr.net/gh/CoeJoder/waitForKeyElements.js@v1.2/waitForKeyElements.js
// ==/UserScript==

// Function to select "Any" option under "Sale Type" filter
function selectAnyOption(jNode) {
    // Find the parent element (.filter-body) containing the "Sale Type" filter
    const saleTypeFilter = jNode.closest('.filter-body');

    // Check if the saleTypeFilter element exists
    if (saleTypeFilter.length) {
        // Find the element corresponding to the "Any" option within the saleTypeFilter
        const anyOption = saleTypeFilter.find('.multiselect__element span[data-select=""] span:contains("Any")');

        // Check if the anyOption element exists
        if (anyOption.length) {
            // Click on the "Any" option under "Sale Type"
            anyOption.click();
            console.log('Clicked on "Any" option under "Sale Type"');
        }
    }
}

// Function to handle click on elements with class "clear-btn" (Clear Button)
function handleClearButtonClick() {
    selectAnyOption($('.filter-title:contains("Sale Type")'));
}

// Wait for ".filter-title" that contains "Sale Type" to appear and select the "Any" option
(function($) {
    'use strict';

    // Use waitForKeyElements utility to wait for the specific element to appear
    waitForKeyElements('.filter-title:contains("Sale Type")', selectAnyOption);

    // Event listener for elements with class "clear-btn"
    $(document).on('click', '.clear-btn', handleClearButtonClick);
})(jQuery);
