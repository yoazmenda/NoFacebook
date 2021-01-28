var mainRemoved = false;
var feedRemoved = false;
function removeFeed() {
    let main = document.querySelector("[role=main]")
    if (main != null) {
        main.parentNode.removeChild(main);
        mainRemoved = true
    }
    let feed = document.querySelector("[role=feed]");
    if (feed != null) {
        feed.parentNode.removeChild(feed);
        feedRemoved = true
    }
    if (mainRemoved && feedRemoved) {
        observer.disconnect()
    }
}

var observer = new MutationObserver(removeFeed);
observer.observe(document.querySelector("[role=main]").parentNode, { childList: true, subtree: true });

