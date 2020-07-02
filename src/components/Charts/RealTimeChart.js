import React, { Component, createRef } from "react";
import MindFusion from "mindfusion-common";
import $ from "jquery";
import * as Charting from "chart-library";

export class RealTimeChart extends Component {
  constructor(props) {
    super(props);

    this.el = React - createRef();

    this.state = {
      chart: null,
    };
  }
  render() {
    return (
      <div>
        <canvas width="1000px" height="800px" ref={this.el}></canvas>
      </div>
    );
  }
}

export default RealTimeChart;
