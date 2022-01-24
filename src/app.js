/*
 * Author: Md. Alfi Sharin Rizvi
 * tinyurl.com/alfisharinrizvi
 */
var URL;

chrome.tabs.query({
	currentWindow: true, 
	active: true
}, (tabs) => {
		const container = document.getElementById("container");
		URL = tabs[0].url;
		
	container.innerHTML = URL;
	}
);

