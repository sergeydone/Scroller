// Define the updateAndScroll function directly on the page
window.updateAndScroll = () => {
    // Reload the page
    location.reload();

    // Scroll to the end of the page
    function scrollToBottom() {
        window.scrollTo(0, document.body.scrollHeight);
        // Check if we're at the bottom of the page
        if (window.innerHeight + window.scrollY < document.body.scrollHeight) {
            // If not, scroll again after a short delay
            setTimeout(scrollToBottom, 100);
        }
    }
    scrollToBottom();
};

// Start the interval to update and scroll the page every second
setInterval(() => {
    // Call the updateAndScroll function
    window.updateAndScroll();
}, 1000);
