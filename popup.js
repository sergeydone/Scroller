document.addEventListener('DOMContentLoaded', function () {
  var button = document.getElementById('activateButton');
  button.addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: () => {
        window.updateAndScroll = () => {
	setTimeout(function(){  location.reload();  }, 200);
 	};
	window.updateAndScroll();
        }
      });
    });
  });
});
document.addEventListener('DOMContentLoaded', function () {
  var button = document.getElementById('scrollButton');
  button.addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: () => {
        window.Scroll = () => {
		setTimeout(function(){  
			window.scrollTo(0, document.body.scrollHeight); 
			 }, 100);
		};
	window.Scroll();
        }
      });
    });
  });
});
document.addEventListener('DOMContentLoaded', function () {
	setInterval(function() {
		var button = document.getElementById('activateButton');
		button.click(); 
}, 8000);
});
document.addEventListener('DOMContentLoaded', function () {
    setInterval(function() {
		var button = document.getElementById('scrollButton');
		button.click(); 
}, 300);
});

