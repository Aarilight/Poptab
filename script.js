chrome.contextMenus.create({
    title: "Popout!",
    onclick: function (info, tab) {
        chrome.windows.create({
            url: tab.url,
            focused: true,
            type: "popup"
        });
    }
});