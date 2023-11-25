import {
  Box,
  Button,
  IconButton,
  Typography,
  useTheme,
  Avatar,
} from "@mui/material";
import { tokens } from "../../theme";
import { mockDataElectricityPrices } from "../../data/mockDataElectricityPrices";
import { mockDataDrivers} from "../../data/mockDataDrivers";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
//import EmailIcon from "@mui/icons-material/Email";
//import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
//import PersonAddIcon from "@mui/icons-material/PersonAdd";
//import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";

import BarChart from "../../components/BarChart";
//import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import { DatePicker, Card, SparkAreaChart, Text, Title } from "@tremor/react";
import { List, ListItem } from "@mui/material";

import WarningIcon from "@mui/icons-material/Warning";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[900],
              color: colors.primary[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(9, 1fr)"
        gridAutoRows="min-content"
        gap="12px"
      >
        {/* ROW 1 */}

        <Box
          gridColumn="span 2" // Adjust this span to control the width of the "Select date" component
          gridRow="span 1"
        >
          <DatePicker />
        </Box>
        <Box
          gridColumn="span 5" // Adjust this span to control the width of the "Select date" component
          gridRow="span 2"
        ></Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 4"
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
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>

        <Box
          gridColumn="span 1" // Adjust this span to control the width of the "Select date" component
          gridRow="span 2"
        ></Box>
        {/* ALERT Box */}
        <Box
          gridColumn="span 3"
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
              <ListItem>BUS 1 - NEED CHARGING</ListItem>
              <ListItem>BUS 3 - UNDER 20%</ListItem>
              <ListItem>BUS 8 - CHARGING OVER 80%</ListItem>
              <ListItem>BUS 11 - CHARGING OVER 80%</ListItem>
              {/* More list items... */}
            </List>
          </Box>
        </Box>
        <Box
          gridColumn="span 2" // Adjust this span to control the width of the "Select date" component
          gridRow="span 1"
        ></Box>

        {/**/}
        <Box
          gridColumn="span 4"
          gridRow="span 1"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box display="flex" flexDirection="column" p="15px">
            <Box borderBottom={`4px solid ${colors.primary[500]}`}>
              <Typography
                color={colors.grey[100]}
                variant="h5"
                fontWeight="600"
              >
                Electricity Price Prediction
              </Typography>
              <Typography variant="subtitle1" color={colors.grey[300]}>
                Hourly Forecast for Next 24 Hours
              </Typography>
            </Box>

            <Box mt={3} mx="auto" style={{ maxWidth: "90%" }}>
              <SparkAreaChart
                data={mockDataElectricityPrices.map((item) => ({
                  time: item.time,
                  Price: item.price,
                }))}
                categories={["Price"]}
                index={"time"}
                colors={["emerald"]}
                className="h-20 w-36"
              />
            </Box>

            <Box mt={3} display="flex" justifyContent="center">
              <Typography variant="subtitle1" color={colors.grey[700]}>
                Current Price:{" "}
                <span style={{ fontWeight: "bold" }}>€0.1823 per KWh</span>
              </Typography>
              <Typography variant="subtitle1" color="green" ml={2}>
                Change: +0.32%
              </Typography>
            </Box>
          </Box>
        </Box>
        {/** */}

        {/* ROW 3 */}
        
        <Box
          gridColumn="span 4" // Adjust this span to control the width of the "Select date" component
          gridRow="span 1"
        ></Box>
        

        {/*ROW4 */}
        <Box
          gridColumn="span 2" // Adjust this span to control the width of the "Select date" component
          gridRow="span 1"
        ></Box>

        <Box
          gridColumn="span 5"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
             <Typography variant="h5" fontWeight="600">
                  ACTIVE DRIVERS
                </Typography>
                <Box
                  display="flex"
                  justifyContent="space-around"
                  alignItems="center"
                  mt={2}
                >
                  {mockDataDrivers.map((driver, index) => (
                    <Box key={index} textAlign="center">
                      <Avatar
                        src={driver.imageUrl}
                        alt={driver.name}
                        sx={{ width: 56, height: 56 }}
                      />
                      <Typography variant="subtitle2">{driver.name}</Typography>
                    </Box>
                  ))}
                </Box>
            <Box>
              
               
              
            </Box>
          </Box>

          {/*Row4 Geo */}
        </Box>
        
      </Box>
    </Box>
  );
};

export default Dashboard;
