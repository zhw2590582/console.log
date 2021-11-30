import React from "react";
import { Console, Hook } from "console-feed";
import * as Demo from "./demo";
import { searchParam } from "./utils";

const id = searchParam("id");
const channel = new BroadcastChannel(`channel_${id}` || "test_channel");
console.log("Console channel name: " + channel.name);

export default class App extends React.Component {
  state = {
    logs: Demo.Initial,
  };

  componentDidMount() {
    Hook(window.console, (log) => this.add(log), false);
    channel.addEventListener("message", this.onMessage.bind(this));
    Demo.Logs();
  }

  onMessage(event) {
    const { log, from } = event.data;
    if (from !== "PROXY") return;
    this.add(log);
  }

  add(log) {
    this.setState({ logs: [...this.state.logs, log] });
  }

  onClear() {
    this.setState({ logs: [] });
  }

  render() {
    return (
      <div style={{ backgroundColor: "#242424" }}>
        <div className="header">
          <div className="left">
            Console <span className="number">{this.state.logs.length}</span>
          </div>
          <div className="right" onClick={() => this.onClear()}>
            Clear
          </div>
        </div>
        <Console logs={this.state.logs} variant="dark" />
      </div>
    );
  }
}
