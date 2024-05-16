import React from "react";
import ReactApexChart from "react-apexcharts";

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [47],
      options: {
        chart: {
          height: 350,
          type: "radialBar",
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 135,
            hollow: {
              margin: 0,
              size: "70%",
              background: "",
              image: undefined,
              imageOffsetX: 0,
              imageOffsetY: 0,
              position: "front",
              dropShadow: {
                enabled: true,
                top: 0,
                left: 0,
                blur: 4,
                opacity: 0.24,
              },
            },
            track: {
              background: "#372145",
              strokeWidth: "100%",
              margin: 0, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: 0,
                left: 0,
                blur: 0,
                opacity: 0,
              },
            },
            dataLabels: {
              show: true,
              name: {
                offsetY: 60,
                show: true,
                color: "white",
                fontSize: "14px",
              },
              value: {
                offsetY: -10,
                formatter: function (val) {
                  return parseInt(val);
                },
                color: "white",
                fontSize: "36px",
                show: true,
              },
            },
          },
        },
        fill: {
          type: "solid",
          colors: ["#7F00CD"],
        },
        stroke: {
          lineCap: "",
        },
        labels: ["ALCOM Score", "47%"],
      },
    };
  }

  render() {
    return (
      <div>
        <div className=" w-[100%] rounded-2xl bg-slate-600 bg-opacity-25 p-6 backdrop-blur-lg">
          <p className="text-lg font-bold text-white">Organization Score</p>
          <div id="chart">
            <ReactApexChart
              options={this.state.options}
              series={this.state.series}
              type="radialBar"
              height={280}
            />
          </div>
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default ApexChart;
