import Head from "next/head";

// import Button from "../components/Button";

import styles from "./index.module.scss";

export default function Home() {
  const handleMessage = () => {
    // var port = chrome.runtime.connect();
    chrome.runtime.onMessageExternal.addListener(function (
      request,
      sender,
      sendResponse
    ) {
      if (request.greeting == "hiya") {
        sendResponse({ farewell: "goodbye" });
        // const key = "myKey";
        // chrome.storage.sync.set({ [key]: request.greeting });
      }
    });

    // chrome.runtime.onMessage.addListener(function (
    //   request,
    //   sender,
    //   sendResponse
    // ) {
    //   if (request.greeting == "hiya") {
    //     sendResponse({ farewell: "goodbye" });

    //     chrome.storage.sync.get("myKey", function (message) {
    //       console.log("Received");
    //       console.log(message);
    //     });
    //   }
    // });
  };
  return (
    <div className={styles.Container}>
      <Head>
        <title>Next Template</title>
        <meta name="description" content="Next.js template by Ivan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome</h1>

      <button onClick={handleMessage}>Display Mess</button>
    </div>
  );
}
