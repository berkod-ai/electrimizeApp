import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../theme";
import { simplifiedMockDataSOC as data } from "../data/mockDataSOC";

const BarChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Function to determine the color of each bar based on SOC value
  const getBarColor = (bar) => {
    if (bar.data.soc < 20 || bar.data.soc > 80) {
      return "red"; // Color for SOC values under 20% and above 80%
    } else if (bar.data.soc >= 20 && bar.data.soc <= 30) {
      return "orange"; // Color for SOC values between 20% and 30%
    }
    return colors.blueAccent[400]; // Default color for other SOC values
  };

  return (
    <ResponsiveBar
      data={data}
      colors={getBarColor} //
      theme={{
        // added
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[900],
            color:"white"
          },
        },
      }}
      //keys={["bus-001", "bus-002", "bus-003", "bus-004", "bus-005", "bus-006"]}
      keys={["soc"]} // Use 'soc' as the key
      indexBy="bus"
      margin={{ top: 50, right: 130, bottom: 50, left: 80 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      borderRadius={37}
      borderColor={{
        from: "color",
        modifiers: [["darker", "1.6"]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "bus", // changed
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        
        legendPosition: "middle",
        legendOffset: -40,
        tickValues: [100, 80, 60, 40, 20],
        format: value => `${value}%` 
      }}
      enableLabel={false}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      role="application"
      barAriaLabel={function (e) {
        return e.id + ": " + e.formattedValue + " in country: " + e.indexValue;
      }}
    />
  );
};

export default BarChart;
