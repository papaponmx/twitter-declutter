// TODO: Within this script we can update the functionality for querying and updating the DOM.
console.log('✅ Inside of content script');

// Remove items from the DOM;
document.querySelector('div[aria-label="Timeline: Trending now"]').style.display = "none";
document.querySelector('aside[aria-label="Who to follow"]').style.display = "none";