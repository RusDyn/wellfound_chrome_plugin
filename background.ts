// background.ts

// Called when the user clicks the "Share" button.
function shareJob() {
    // Get the current tab
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        // Send a message to the active tab
        chrome.tabs.sendMessage(tabs[0]!.id!, { greeting: "hello" }, (response) => {
            console.log(response.farewell);
        });
    });
}

// This event is fired each time a user visits a new page
chrome.webNavigation.onCompleted.addListener(() => {
    // Get the current tab
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        // Check if the user is on an AngelList page
        if (tabs[0]!.url!.includes("https://angel.co/")) {
            // Create the "Share" button
            const shareButton = document.createElement("button");
            shareButton.innerHTML = "Share";
            shareButton.addEventListener("click", shareJob);

            // Get the "Apply" button
            const applyButton = document.getElementById("apply-button");
            // Insert the "Share" button before the "Apply" button
            applyButton!.parentNode!.insertBefore(shareButton, applyButton);
        }
    });
});
