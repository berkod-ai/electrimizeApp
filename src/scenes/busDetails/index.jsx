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


import React from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  List,
  ListItem,
  Typography,
  useTheme,
  Avatar,
} from "@mui/material";

import { Flex, ProgressBar, CategoryBar } from "@tremor/react";

//import { useState } from "react";
import { tokens } from "../../theme";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

import { mockDataSOC } from "../../data/mockDataSOC";



import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";

import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const BusDetails = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { vehicleId } = useParams(); // Retrieve vehicleId from URL


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

  // Fetch or compute data for the specific bus here, based on vehicleId

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="BUS-001" />

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
            onClick={() => downloadCSV(mockDataSOC, "datas.csv")}
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
            onClick={() => downloadJSON(mockDataSOC, "data.json")}
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

        {/* ROW 2 */}
        <Box
          gridColumn="span 5"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "13px 30px 20px 30px" }}
          >
            Drivers BUS-001 29/11/2023
          </Typography>

          <Box
            display="flex"
            height={100}
            width={200}
            backgroundColor={colors.primary[400]}
            alignItems="center"
            padding={1}
          >
            <Avatar
              src="../public/assets/carlos.jpg"
              alt="Carlos"
              sx={{
                width: 90,
                height: 90,
                boxShadow: "10px 4px 10px rgba(0, 0, 0, 0.1)",
                left: 15,
              }}
            />
            <Avatar
              src="../public/assets/leo.jpg"
              alt="Leo"
              sx={{
                width: 90,
                height: 90,
                boxShadow: "10px 4px 10px rgba(0, 0, 0, 0.1)",
                left: 35,
              }}
            />
          </Box>

          <Box height="280px" mt="-20px">
            <LineChart
              data={mockDataSOC}
              xAxisKey="time"
              yAxisKey="soc"
              isDashboard={true}
            />
          </Box>
        </Box>
        {/* Update Box */}
        <Box
          gridColumn="span 2"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p={2}
        >
          <Box display="flex" alignItems="center" gap={1}>
            <TipsAndUpdatesIcon sx={{ color: "blue" }} />{" "}
            {/* Update icon in red */}
            <Typography variant="h5" fontWeight="600" sx={{ color: "blue" }}>
              UPDATE
            </Typography>
          </Box>
          {/* List of alerts */}
          <Box>
            <List>
              <ListItem>SOC UNDER 20%</ListItem>
              <ListItem>CARLOS STARTED AT 8AM</ListItem>
              <ListItem>HAVEN'T BEEN CHARGED AT OPTIMAL PERIOD</ListItem>

              {/* More list items... */}
            </List>
          </Box>
        </Box>

        {/*  */}
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
            OPTIMAL PERIOD OF CHARGE
          </Typography>
          <Typography variant="subtitle2" color={colors.grey[100]}>
            29/11/2023
          </Typography>
        </Box>

        {/**/}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box display="flex" flexDirection="column" p="10px">
            <Box mt={2} mx="auto" style={{ maxWidth: "90%" }}>
              {/* Electricity Price Prediction */}
              <Flex justifyContent="between" alignItems="center" mb={2}>
                <Typography fontSize="24px">Electricity-Price</Typography>

                <Typography fontSize="24px">0.1485 €/kWh</Typography>
              </Flex>

              {/* ProgressBar */}
              <ProgressBar value={45} color="teal" className="h-5 w-96" />

              {/* Time and SOC */}
              <Flex justifyContent="between" mt={2}>
                <Typography fontSize="24px">12:00 - 14:00</Typography>
                <Typography fontSize="24px">SOC &bull; 43%</Typography>
              </Flex>

              {/* CategoryBar */}
              <CategoryBar
                values={[20, 20, 40, 20]}
                colors={["rose", "orange", "emerald", "rose"]}
                markerValue={62}
                className="h-5 w-96"
              />
            </Box>

            <Box mt={3} display="flex" justifyContent="center"></Box>
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
          <Typography color={colors.grey[100]} variant="h4" fontWeight="600">
            OTHER OPTIMAL PERIODS OF CHARGE
          </Typography>
          <Typography variant="subtitle2" color={colors.grey[100]}>
            29/11/2023
          </Typography>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          
            <Box display="flex" flexDirection="column" p="10px">
              <Box mt={2} mx="auto" style={{ maxWidth: "90%" }}>
                {/* Electricity Price Prediction */}
                <Flex justifyContent="between" alignItems="center" mb={2}>
                  <Typography fontSize="24px">Electricity-Price</Typography>

                  <Typography fontSize="24px">0.1924 €/kWh</Typography>
                </Flex>

                {/* ProgressBar */}
                <ProgressBar value={45} color="cyan" className="h-5 w-96" />

                {/* Time and SOC */}
                <Flex justifyContent="between" mt={2}>
                  <Typography fontSize="24px">22:00 - 23:00</Typography>
                  <Typography fontSize="24px">SOC &bull; 8%</Typography>
                </Flex>

                {/* CategoryBar */}
                <CategoryBar
                  values={[20, 20, 40, 20]}
                  colors={["rose", "orange", "emerald", "rose"]}
                  markerValue={11}
                  className="h-5 w-96"
                />
              </Box>
            </Box>

            <Box
              display="flex"
              justifyContent="space-around"
              alignItems="center"
              mt={2}
            ></Box>
          
        </Box>
      </Box>
    </Box>
  );
};

export default BusDetails;
