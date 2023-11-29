import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../theme";
import { mockDataDriversKM as data} from "../data/mockDataDrivers";

const BarChartDriver = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveBar
      data={data}
      colors={colors.greenAccent[400]} //
      theme={{
        // added
        axis: {
          domain: {
            line: {
              stroke: colors.grey[700],
            },
          },
          legend: {
            text: {
              fill: colors.grey[700],
              
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[700],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
              fontSize: 18,
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
      keys={["km"]} // Use 'soc' as the key
      indexBy="date"
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
      borderRadius={7}
      borderColor={{
        from: "color",
        modifiers: [["darker", "1.6"]],
      }}
      
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "Kilometers", 
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        
        legendPosition: "middle",
        legendOffset: -40,
        tickValues: [160, 120, 80, 40, 0],
        format: value => `${value}km` 
      }}
      enableLabel={true}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      role="application"
      barAriaLabel={function (e) {
        return e.id + ": " + e.formattedValue + "  " + e.indexValue;
      }}
    />
  );
};

export default BarChartDriver;
