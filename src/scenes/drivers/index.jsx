/**
 * 
 * 
 * Author Berkay Suleyman Dik
 * All rights are reserved
 *  https://github.com/berkod-ai
 * 
 * 
 * 
 */




import {
  Box,
  Button,
  IconButton,
  Typography,
  useTheme,
  Avatar,
} from "@mui/material";
import { useState } from "react";
import { tokens } from "../../theme";

import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

import {
  mockDataDriverDuration,
  mockDataDriversKM,
  mockDataDriverDistance,
} from "../../data/mockDataDrivers";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

import Header from "../../components/Header";
import BarChartDriver from "../../components/BarChartDriver";
import PieChart from "../../components/PieChart";

import { SparkAreaChart, Select, SelectItem } from "@tremor/react";

const Drivers = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [value, setValue] = useState("");


  const downloadReport = async () => {
    const input = document.body;
    const canvas = await html2canvas(input);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    pdf.addImage(imgData, "PNG", 0, 0);
    pdf.save("dashboard-report.pdf");
  };

  const downloadJSON = (data, filename) => {
    const jsonStr = JSON.stringify(data, null, 4);
    const blob = new Blob([jsonStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = filename;
    link.href = url;
    link.click();
  };

  const downloadCSV = (data, filename) => {
    let csvStr = data.map((item) => Object.values(item).join(",")).join("\n");
    const blob = new Blob([csvStr], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Drivers" />

        <Box>
          <Button
            onClick={downloadReport}
            sx={{
              backgroundColor: colors.grey[900],
              color: colors.primary[100],
              fontSize: "19px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
          <br />
          <Button
            onClick={() => downloadCSV(mockDataDriverDistance, mockDataDriverDuration, mockDataDriversKM, "datas.csv")}
            sx={{
              backgroundColor: colors.grey[900],
              color: colors.primary[100],
              fontSize: "11px",
              padding: "5px 10px",
              marginRight: "65px", // Add margin right for spacing between buttons
            }}
          >
            Download CSV
          </Button>

          <Button
            onClick={() => downloadJSON(mockDataDriverDistance, mockDataDriverDuration, mockDataDriversKM, "data.json")}
            sx={{
              backgroundColor: colors.grey[900],
              color: colors.primary[100],
              fontSize: "11px",
              padding: "5px 10px",
            }}
          >
            Download JSON
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(8, 1fr)"
        gridAutoRows="min-content"
        gap="12px"
      >
        {/* ROW 1 */}

        <Box gridColumn="span 2" gridRow="span 1">
          <Select onValueChange={setValue}>
            <SelectItem value="1">John </SelectItem>
            <SelectItem value="2">Carlos </SelectItem>
            <SelectItem value="3">Leo </SelectItem>
            <SelectItem value="4">Sarah </SelectItem>
          </Select>
        </Box>
        <Box gridColumn="span 4" gridRow="span 1"></Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 5"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          alignItems="center"
          padding={2}
        >
          <Box
            display="flex"
            backgroundColor={colors.primary[400]}
            alignItems="center"
            padding={1}
          >
            <Avatar
              src="/assets/john.jpg"
              alt="John"
              sx={{
                width: 85,
                height: 85,
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            />
            <Typography
              variant="h5"
              fontWeight="600"
              sx={{ padding: "3px 30px 0 30px" }}
            >
              DRIVER JOHN
            </Typography>
          </Box>

          <Box height="280px" width="1180px" mt="-20px">
            <BarChartDriver
              data={mockDataDriversKM.d}
              xAxisKey="date"
              yAxisKey="km"
              isDashboard={true}
            />
          </Box>
        </Box>

        <Box gridColumn="span 1" gridRow="span 2"></Box>

        {/* PIE CHART Box */}
        <Box
          gridColumn="span 5"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p={2}
        >
          <Box display="flex" alignItems="center" gap={1}>
            <Box m={1}>
              <Header title="John's Event" />
              <Box height="45vh" width="56vw">
                <PieChart />
              </Box>
            </Box>
          </Box>
        </Box>

        {/**/}
        <Box
          gridColumn="span 3"
          gridRow="span 1"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box display="flex" flexDirection="column" p="15px">
            <Box borderBottom={`4px solid ${colors.primary[500]}`}>
              <Typography
                color={colors.grey[300]}
                variant="h4"
                fontWeight="600"
              >
                Distance Travelled
              </Typography>
              <Typography variant="subtitle2" color={colors.grey[300]}>
                Monthly Summary
              </Typography>
            </Box>

            <Box mt={2} mx="auto" style={{ maxWidth: "90%" }}>
              <SparkAreaChart
                data={mockDataDriverDistance.map((item) => ({
                  month: item.month,
                  distance: item.distance,
                }))}
                categories={["distance"]}
                index={"month"}
                colors={["emerald"]}
                className="h-20 w-96"
              />
            </Box>

            <Box mt={3} display="flex" justifyContent="center">
              <Typography variant="h4" color={colors.grey[300]}>
                Distance: <span style={{ fontWeight: "bold" }}>178545 Km</span>
              </Typography>
              <Typography variant="h5" color="green" ml={2}>
                Change: +10.32 %
              </Typography>
            </Box>
          </Box>
        </Box>
        {/** */}

        {/* ROW 3 */}

        {/*ROW4 */}

        <Box
          gridColumn="span 3"
          gridRow="span 1"
          backgroundColor={colors.primary[400]}
        >
          <Box display="flex" flexDirection="column" p="15px">
            <Box borderBottom={`4px solid ${colors.primary[500]}`}>
              <Typography
                color={colors.grey[300]}
                variant="h4"
                fontWeight="600"
              >
                Total Duration
              </Typography>
              <Typography variant="subtitle2" color={colors.grey[300]}>
                Monthly Summary
              </Typography>
            </Box>

            <Box mt={3} display="flex" justifyContent="center">
              <SparkAreaChart
                data={mockDataDriverDuration.map((item) => ({
                  month: item.month,
                  duration: item.duration,
                }))}
                categories={["duration"]}
                index={"month"}
                colors={["emerald"]}
                className="h-20 w-96"
              />
            </Box>

            <Box mt={3} display="flex" justifyContent="center">
              <Typography variant="h4" color={colors.grey[300]}>
                Total Duration:{" "}
                <span style={{ fontWeight: "bold" }}>14D 7M 27S</span>
              </Typography>
              <Typography variant="h5" color="green" ml={2}>
                Change: -9.71 %
              </Typography>
            </Box>
          </Box>
          {/**/}
        </Box>
      </Box>
    </Box>
  );
};

export default Drivers;
