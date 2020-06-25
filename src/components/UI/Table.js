import React, { Component } from "react";

export default class Table extends Component {
  timestampToDate = (timestamp) => {
    const timestampInt = parseInt(timestamp);
    const date = new Date(timestampInt).toLocaleDateString("en-GB");
    return <td>{date}</td>;
  };

  timestampToTime = (timestamp) => {
    const timestampInt = parseInt(timestamp);
    const time = new Date(timestampInt).toLocaleTimeString("en-GB");
    return <td>{time}</td>;
  };

  render() {
    const { data } = this.props;

    return (
      <table className="responsive-table">
        <thead>
          <tr>
            <th>Serial:</th>
            <th>Sensor Name:</th>
            <th>Date</th>
            <th>Time</th>
            <th>Value</th>
            <th>Temperature</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index}</td>
                <td>{item.sensor_name}</td>
                {this.timestampToDate(item.timestamp)}
                {this.timestampToTime(item.timestamp)}
                <td>{item.sensor_value}</td>
                <td>{item.temperature}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
