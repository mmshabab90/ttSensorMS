import React, { Component } from "react";
import { Line, defaults } from "react-chartjs-2";
defaults.global.maintainAspectRatio = false;

const data = {
  labels: [
    "10/04/2018",
    "10/05/2018",
    "10/06/2018",
    "10/07/2018",
    "10/08/2018",
    "10/09/2018",
    "10/10/2018",
    "10/11/2018",
    "10/12/2018",
    "10/13/2018",
    "10/14/2018",
    "10/15/2018",
    "10/16/2018",
    "10/17/2018",
    "10/18/2018",
    "10/19/2018",
    "10/20/2018",
    "10/21/2018",
    "10/22/2018",
    "10/23/2018",
    "10/24/2018",
    "10/25/2018",
    "10/26/2018",
    "10/27/2018",
    "10/28/2018",
    "10/29/2018",
    "10/30/2018",
    "10/31/2018",
    "10/32/2018",
    "10/33/2018",
  ],
  datasets: [
    {
      label: "Vibration Basic 1",
      data: Array.from({ length: 40 }, () => Math.floor(Math.random() * 40)), // randomly generated N = 40 length array 0 <= A[N] <= 39
      fill: false, // Don't fill area under the line
      borderColor: "green", // Line color
    },
    {
      label: "Vibration Basic 2",
      data: Array.from({ length: 40 }, () => Math.floor(Math.random() * 40)), // randomly generated N = 40 length array 0 <= A[N] <= 39
      fill: false, // Don't fill area under the line
      borderColor: "red", // Line color
    },
  ],
};

export default class ChartComponent extends Component {
  render() {
    return (
      <article className="canvas-container">
        <Line data={data} />
      </article>
    );
  }
}
