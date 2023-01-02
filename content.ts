// content.ts

// Listen for messages from the background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.greeting === "hello") {
        // Do something when the "Share" button is clicked
        console.log("The Share button was clicked!");
        sendResponse({ farewell: "goodbye" });
    }
});