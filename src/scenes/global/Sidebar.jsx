import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";

//ICONS
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import PersonIcon from '@mui/icons-material/Person';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Home");

  return (
    <Box
    height={1235}
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "20px 25px 25px 15px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#a0b7f4 !important",
        },
        "& .pro-menu-item.active": {
          color: "#1b59f8 !important",
        },
      }}
    >
      <ProSidebar 
       width={350}
       height={1260}
       
       collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "25px 10px 25px 5px",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="35px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="160px"
                  height="160px"
                  src={`../../assets/TransviaGo.png`}
                  style={{ cursor: "pointer", borderRadius: "10%" }}
                />
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "15%"}>
            <Item
              title="Home"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            
            <Item
              title="Vehicles"
              to="/vehicles"
              icon={<DirectionsBusIcon />}
              selected={selected}
              setSelected={setSelected}
            />

<Item
              title="Drivers"
              to="/drivers"
              icon={< PersonIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            

          
          </Box >
          
          {/*LOGO*/}
          {!isCollapsed && (
            <Box 
            height={750}
             padding={6}>
              <Box 
              display="flex" 
              flexDirection="column"
              justifyContent="center" 
              alignItems="center">
                <img
                  alt="logo_Electrimize"
                  width="140px"
                  height="120px"
                  src={`../../assets/electrimize_logo.png`}
                  style={{ cursor: "pointer", borderRadius: "10%" }}
                />
              </Box>
              <Box textAlign="center" >
            <Typography
              variant="h2"
              color={colors.primary[100]}
              fontWeight="bold"
              sx={{ m: "10px 0 0 0" }}
            >
              ElectrimizE
            </Typography>
            <Typography 
            variant="h6" 
            padding={0.1}
            color={colors.grey[400]}>
              Fleet management
            </Typography>
          </Box>
            </Box>
          )}
          
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
