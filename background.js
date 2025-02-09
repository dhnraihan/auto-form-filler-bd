// background.js (Removed Auto-Run, Only Runs on Click)
chrome.browserAction.onClicked.addListener((tab) => {
  chrome.tabs.executeScript(tab.id, { file: "content.js" });
});
