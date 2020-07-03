import React from "react";
import ReactApexChart from "react-apexcharts";

const RealTimeChart = ({ elData }) => {
  const s1Data = [];
  const s2Data = [];
  const timestamps = [];

  elData.forEach((data) => {
    if (data.sensor_name === "VibrationBasic1") {
      s1Data.push(data.sensor_value);
    }
    if (data.sensor_name === "VibrationBasic2") {
      s2Data.push(data.sensor_value);
    }
  });

  elData.forEach((data) => {
    timestamps.push(parseInt(data.timestamp));
  });

  //console.log(s1Data);
  //console.log(s2Data);
  //console.log(timestamps);

  const series = [
    {
      name: "VibrationBasic1",
      data: s1Data,
    },
    {
      name: "VibrationBasic2",
      data: s2Data,
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      labels: {
        format: "dd/MM",
      },
      categories: timestamps,
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={350}
      />
    </div>
  );
};

export default RealTimeChart;
