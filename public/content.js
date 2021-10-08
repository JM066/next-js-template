// var port = chrome.runtime.connect();

window.addEventListener(
  "message",
  function (event) {
    // We only accept messages from ourselves
    if (event.source != window) return;

    if (event.data.type && event.data.type == "FROM_PAGE") {
      console.log("Content script received: " + event.data.text);
      // chrome.runtime.postMessage({ joke: event.data.text });

      chrome?.runtime?.sendMessage(
        "icficoacmpanppipakgdljdiokogcjjk",
        {
          greeting: "hiya",
        },
        function (response) {
          console.log(response);
        }
      );
      // const key = "myKey";
      // chrome.storage.sync.set({ [key]: event.data.text });
    }
  },
  false
);
