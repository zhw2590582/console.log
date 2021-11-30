import React from "react";
import { Console, Hook } from "console-feed";
import * as Demo from "./demo";

export default class App extends React.Component {
  state = {
    logs: Demo.Initial,
  };

  componentDidMount() {
    Hook(window.console, (log) => this.add(log), false);
    Demo.Logs();
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
