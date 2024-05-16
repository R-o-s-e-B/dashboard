import React from "react";
import ReactApexChart from "react-apexcharts";

class LineChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Area",
          data: [40, 41, 42, 44, 47, 44, 44, 45, 48, 47],
        },
      ],
      options: {
        chart: {
          type: "area",
          height: 350,
          zoom: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
          colors: ["#9E00FF"],
        },

        title: {
          text: "Score Trend",
          align: "Center",
          style: {
            color: "#ffffff",
            fontSize: 20,
          },
        },

        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"], // Define labels directly
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
          ],
          colors: ["#7505BB"],
          title: {
            text: "Date",
            style: {
              color: "#ffffff",
              fontSize: 16,
              fontWeight: "normal",
            },
          },
        },
        yaxis: {
          title: {
            text: "Score",
            style: {
              color: "#ffffff",
              fontSize: 16,
              fontWeight: "normal",
            },
          },
        },

        legend: {
          horizontalAlign: "left",
        },
        fill: {
          colors: ["#7505BB"], // Change the fill color here
          type: "solid", // Specify the fill type
          opacity: 0.3, // Set opacity for the filled area
        },
      },
    };
  }

  render() {
    return (
      <div>
        <div
          id="chart"
          className="w-full rounded-2xl bg-slate-600 bg-opacity-25 p-6 backdrop-blur-lg text-white"
        >
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="area"
            height={460}
            width={800}
          />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default LineChart;
