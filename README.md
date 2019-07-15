# Chrome Extension Template

Template for chrome extension.

## How to use



## How to remove unused components

### Options
1.  In manifest.json:
    1.  In permissions, remove "storage"
    2.  Remove "options_ui" entry
2.  Remove the following files:
    1.  `options.html`
    2.  `options.js`
    3.  `options.json`

## FAQ

### How to view stored data in chrome

I could not find a way to view data stored by `chrome.storage.sync` directly in Chrome, so a workaround is to enter this into the console of the background or page:

`chrome.storage.sync.get(null, function (data) { console.info(data) });`

That will spit out everything stored in `chrome.storage.sync`.
