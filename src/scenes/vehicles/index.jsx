import { Box, Typography, Button, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataVehicles } from "../../data/mockDataVehicles"; // Assume this is your new mock data
import Header from "../../components/Header";
import { Card, Metric, CategoryBar, Legend, Text } from "@tremor/react";


const Vehicles = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "vehicleId", headerName: "VEHICLE ID", flex: 1 },
    { field: "soc", headerName: "SOC (%)", flex: 1 },
    { field: "optimalCharge", headerName: "OPTIMAL CHARGE", flex: 1 },
    { field: "lastCharge", headerName: "LAST CHARGE", flex: 1 }
  ];

  // Placeholder counts for active and inactive vehicles
  const activeVehiclesCount = 10;
  const inactiveVehiclesCount = 7;

  return (
    <Box m="20px">
    <Header title="VEHICLES" subtitle="Fleet Vehicle Status" />
    
    <Card className="max-w-md mx-auto">
    <Text>Total Vehicle</Text>
    <Metric>14</Metric>
    <CategoryBar className="mt-4" values={[10, 4]} colors={["emerald", "red"]} />
    <Legend
      className="mt-3"
      categories={["Active vehicles", "Inactive vehicles"]}
      colors={["emerald", "red"]}
    />
  </Card>



    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        mt: 2
      }}
    >
      <Button
        variant="contained"
        color="primary"
        onClick={() => {/* Add the logic for adding a vehicle here */}}
      >
        + Add Vehicle
      </Button>
    </Box>
    <Box
      m="40px 0 0 0"
      height="75vh"
      sx={{
        "& .MuiDataGrid-root": {
          border: "none",
        },
        "& .MuiDataGrid-cell": {
          borderBottom: "none",
        },
        "& .name-column--cell": {
          color: colors.greenAccent[300],
        },
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: colors.blueAccent[700],
          borderBottom: "none",
        },
        "& .MuiDataGrid-virtualScroller": {
          backgroundColor: colors.primary[400],
        },
        "& .MuiDataGrid-footerContainer": {
          borderTop: "none",
          backgroundColor: colors.blueAccent[700],
        },
        "& .MuiCheckbox-root": {
          color: `${colors.greenAccent[200]} !important`,
        },
      }} 
    >
      <DataGrid checkboxSelection rows={mockDataVehicles} columns={columns} />
      <Box>
      </Box>
    </Box>
    
  </Box>
  );
};

export default Vehicles;
