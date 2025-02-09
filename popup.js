// popup.js
document.getElementById("fillForm").addEventListener("click", () => {
  // Send a message to the content script to fill the form
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: "fillForm" });
  });
});