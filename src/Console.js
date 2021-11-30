import React from "react";
import { Console, Hook, Unhook } from "console-feed";
import styled from "styled-components";

const Style = styled.div`
  background-color: "#242424";
  .console-header {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 1;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #eee;
    padding: 7px 10px;
    font-size: 13px;
    background-color: #222;
    border-bottom: 1px solid rgb(255 255 255 / 10%);
    user-select: none;
    .console-header-left {
      display: flex;
      align-items: center;
      .console-header-number {
        margin-left: 5px;
        color: rgba(255, 255, 255, 0.4);
      }
    }
    .console-header-right {
      cursor: pointer;
    }
  }
  .console-component {
    position: relative;
    z-index: 0;
    padding-top: 35px;
  }
`;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.onMessage = this.onMessage.bind(this);
    this.onClear = this.onClear.bind(this);
    this.state = {
      logs: [],
    };
  }

  componentDidMount() {
    Hook(window.console, (log) => this.add(log));
  }

  onMessage(event) {
    const { data, type, from } = event.data;
    if (from !== "APP" || type !== "LOG") return;
    this.add(data);
  }

  add(log) {
    this.setState({ logs: [...this.state.logs, log] });
  }

  onClear() {
    this.setState({ logs: [] });
  }

  componentWillUnmount() {
    Unhook(window.console);
  }

  render() {
    return (
      <Style>
        <div className="console-header">
          <div className="console-header-left">
            Console{" "}
            <span className="console-header-number">
              {this.state.logs.length}
            </span>
          </div>
          <div className="console-header-right" onClick={this.onClear}>
            Clear
          </div>
        </div>
        <div className="console-component">
          <Console logs={this.state.logs} variant="dark" />
        </div>
      </Style>
    );
  }
}
