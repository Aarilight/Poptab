chrome.contextMenus.create({
    title: "Popout!",
    onclick: function (info, tab) {
        window.open(tab.url, "detab", "toolbar=0", "width=500, height=500");
    }
});