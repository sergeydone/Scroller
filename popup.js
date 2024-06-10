document.addEventListener('DOMContentLoaded', function () {
  var button = document.getElementById('activateButton');
  button.addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
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
    });
  });
});
document.addEventListener('DOMContentLoaded', function () {
    setInterval(function() {
        var button = document.getElementById('activateButton');
        button.click();
    }, 1000);
});

