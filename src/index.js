import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { searchParam } from "./utils";

const type = searchParam("type");
if (type === "proxy") {
  const id = searchParam("id");
  const channel = new BroadcastChannel(`channel_${id}` || "test_channel");
  console.log("Proxy channel name: " + channel.name);
  window.addEventListener("message", (event) => {
    const { log, from } = event.data;
    if (from === "APP") {
      channel.postMessage({
        log,
        from: "PROXY",
      });
    }
  });
} else {
  const app = document.getElementById("app");
  ReactDOM.render(<App />, app);
}
