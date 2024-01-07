import { ResponsivePie } from "@nivo/pie";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";

import { mockPieDataDriver as data } from "../data/mockDataDrivers";


const PieChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <ResponsivePie
      data={data}
      theme={{
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
              fill: colors.grey[700],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
            fontSize: 18,
          },
        },
      }}
      margin={{ top: 12, right: 15, bottom: 18, left: 10 }}
      valueFormat=" >-"
      innerRadius={0.5}
      padAngle={0.5}
      cornerRadius={2}
      activeOuterRadiusOffset={8}
      borderWidth={4}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      LinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor={colors.grey[100]}
      arcLinkLabelsDiagonalLength={7}
      arcLiarcnkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      enableArcLabels={true}  
      arcLabelsRadiusOffset={0.4}
      arcLabelsSkipAngle={7}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      legends={[
        {
          anchor: "bottom-left",
          direction: "column",
          justify: false,
          translateX: 1,
          translateY: 10,
          itemsSpacing: 20,
          itemWidth: 10,
          itemHeight: 18,
          itemTextColor: "#999",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 28,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#00000",
              },
            },
          ],
        },
      ]}
    />
  );
};

export default PieChart;
