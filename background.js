chrome.action.onClicked.addListener((tab) => {
  // Start the interval to update and scroll the page every second
  setInterval(() => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: () => {
        // Define the updateAndScroll function directly on the page
        window.updateAndScroll = () => {
          // Reload the page
          location.reload();
    
          // Scroll to the end of the page
          window.scrollTo(0, document.body.scrollHeight);
        };
        
        // Call the updateAndScroll function
        window.updateAndScroll();
      }
    });
  }, 1000);
});
