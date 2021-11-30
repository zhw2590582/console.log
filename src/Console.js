import React from "react";
import { Console, Hook, Unhook } from "console-feed";
import styled from "styled-components";

const Style = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #242424;
  .console-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #eee;
    padding: 7px 10px;
    font-size: 12px;
    background-color: #111;
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
    scroll-behavior: smooth;
    position: relative;
    overflow: auto;
    height: 200px;
    flex: 1;
  }
`;

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.consoleRef = React.createRef();
    this.onClear = this.onClear.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);

    this.state = {
      logs: [],
      hover: false,
    };
  }

  componentDidMount() {
    Hook(window.console, (log) => this.add(log), false);
  }

  add(log) {
    this.setState({
      logs: [...this.state.logs, log],
    });

    const { current } = this.consoleRef;
    if (!this.state.hover && current) {
      current.scrollTop = current.scrollHeight;
    }
  }

  onClear() {
    this.setState({
      logs: [],
    });
  }

  onMouseEnter() {
    this.setState({
      hover: true,
    });
  }

  onMouseLeave() {
    this.setState({
      hover: false,
    });
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
        <div
          ref={this.consoleRef}
          className="console-component"
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        >
          <Console logs={this.state.logs} variant="dark" />
        </div>
      </Style>
    );
  }
}
