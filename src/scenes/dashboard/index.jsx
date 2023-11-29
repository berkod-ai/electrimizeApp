import { Box, Button, Typography, useTheme, Avatar } from "@mui/material";
import { tokens } from "../../theme";
import { mockDataElectricityPrices } from "../../data/mockDataElectricityPrices";
import { mockDataDrivers } from "../../data/mockDataDrivers";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

//import EmailIcon from "@mui/icons-material/Email";
//import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
//import PersonAddIcon from "@mui/icons-material/PersonAdd";
//import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";

import BarChart from "../../components/BarChart";
//import StatBox from "../../components/StatBox";

import { SparkAreaChart } from "@tremor/react";
import { List, ListItem } from "@mui/material";

import WarningIcon from "@mui/icons-material/Warning";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

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
        <Header
          title="DASHBOARD"
          style={{ fontSize: "84px", fontWeight: "bold" }}
        />

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
            onClick={() => downloadCSV(mockDataElectricityPrices, "data.csv")}
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
            onClick={() => downloadJSON(mockDataElectricityPrices, "data.json")}
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

        <Box gridColumn="span 5" gridRow="span 2"></Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 5"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            FLEET SOC %
          </Typography>
          <Box height="280px" width="1180px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>

        {/* ALERT Box */}
        <Box
          gridColumn="span 2"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p={2}
        >
          <Box display="flex" alignItems="center" gap={1}>
            <WarningIcon sx={{ color: "red" }} /> {/* Alert icon in red */}
            <Typography variant="h5" fontWeight="600" sx={{ color: "red" }}>
              ALERT
            </Typography>
          </Box>
          {/* List of alerts */}
          <Box>
            <List>
              <ListItem>BUS-001 - CRITICIAL LEVEL</ListItem>
              <ListItem>BUS-003 - UNDER 20%</ListItem>
              <ListItem>BUS-007 - ATTENTION</ListItem>
              <ListItem>BUS-008 - OVER 80%</ListItem>
              <ListItem>BUS-011 - OVER 80%</ListItem>
              {/* More list items... */}
            </List>
          </Box>
        </Box>
        <Box gridColumn="span 8" gridRow="span 1"></Box>
        <Box gridColumn="span 8" gridRow="span 1"></Box>

        <Box
          gridColumn="span 3"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography color={colors.grey[100]} variant="h4" fontWeight="600">
            Electricity Price Prediction
          </Typography>
          <Typography variant="subtitle2" color={colors.grey[300]}>
            Hourly Forecast for Next 24 Hours
          </Typography>
        </Box>
        {/**/}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box display="flex" flexDirection="column" p="15px">
            <Box mt={3} mx="auto" style={{ maxWidth: "90%" }}>
              <SparkAreaChart
                data={mockDataElectricityPrices.map((item) => ({
                  time: item.time,
                  Price: item.price,
                }))}
                categories={["Price"]}
                index={"time"}
                colors={["emerald"]}
                className="h-20 w-96"
              />
            </Box>

            <Box mt={3} display="flex" justifyContent="center">
              <Typography variant="h4" color={colors.grey[100]}>
                Current Price:{" "}
                <span style={{ fontWeight: "bold" }}>€0.1823 per KWh</span>
              </Typography>
              <Typography variant="h5" color="green" ml={2}>
                Change: +0.32%
              </Typography>
            </Box>
          </Box>
        </Box>
        {/** */}

        {/* ROW 3 */}

        <Box gridColumn="span 8" gridRow="span 1"></Box>

        {/*ROW4 */}
        <Box gridColumn="span 8" gridRow="span 1"></Box>
        <Box
          gridColumn="span 3"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
            ACTIVE DRIVERS
          </Typography>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="15px"
            p="0 15px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box borderBottom={`4px solid ${colors.primary[500]}`}></Box>

            <Box
              display="flex"
              justifyContent="space-around"
              alignItems="center"
              mt={2}
            >
              {mockDataDrivers.map((driver, index) => (
                <Box key={index} textAlign="center" style={{ padding: "10px" }}>
                  <Avatar
                    src={driver.imageUrl}
                    alt={driver.name}
                    sx={{
                      width: 85,
                      height: 85,
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                  <Typography variant="subtitle1" style={{ marginTop: "5px" }}>
                    {driver.name}
                  </Typography>
                </Box>
              ))}
            </Box>
            <Box></Box>
          </Box>

          {/*Row4 Geo */}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
