chrome.omnibox.onInputEntered.addListener((text) => {
    var newURL = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(text);
    chrome.tabs.create({ url: newURL });
});
