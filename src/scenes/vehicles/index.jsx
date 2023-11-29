import { Box, Typography, Button, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
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
    { field: "lastCharge", headerName: "LAST CHARGE", flex: 1 },
  ];
  

  const navigate = useNavigate();

  const handleRowClick = (params) => {
    
    navigate(`/vehicles/${params.row.vehicleId}`);
    
  };

  // Placeholder counts for active and inactive vehicles
  const activeVehiclesCount = 10;
  const inactiveVehiclesCount = 7;

  return (
    <Box display="flex" flexDirection="column" p="5px">
      <Box borderBottom={`4px solid ${colors.grey[900]}`}>
        <Box m="20px">
          <Header title="VEHICLES"/>

          <Card className="max-w-md mx-auto" style={{ backgroundColor: colors.grey[900] }}>
            <Metric
            style={{ 
              color:"white",
              fontSize: "44px" }}
            >
              16
              </Metric>
            <CategoryBar
              className="mt-2"
              values={[11, 5]}
              colors={["emerald", "red"]}
            />
            <Legend
              className="mt-2"
              categories={["Active vehicles", "Inactive vehicles"]}
              colors={["emerald", "red"]}
              style={{ fontSize: "44px" }}
            />
          </Card>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          padding: 2,
        }}
      >
        <Button
           sx={{
            backgroundColor: colors.grey[900],
            color: colors.primary[100],
            fontSize: "17px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
        
          onClick={() => {
            /* Add the logic for adding a vehicle here */
          }}
        >
          + Add Vehicle
        </Button>
      </Box>
      <Box
        m="10px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.blueAccent[100],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.grey[900],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.grey[900],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.blueAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={mockDataVehicles}
          columns={columns}
          onRowClick={(params) => navigate(`/vehicles/${params.row.vehicleId}`)}

        />
        <Box></Box>
      </Box>
    </Box>
  );
};

export default Vehicles;
