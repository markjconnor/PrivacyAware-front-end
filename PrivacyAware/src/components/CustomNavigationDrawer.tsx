import {
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Avatar,
    Divider,
    Box,
    Typography,
  } from "@mui/material";
  import { Shield, Notifications, BarChart, People, School, Settings, Logout } from "@mui/icons-material";
  import { useState } from "react";
  
  const menuItems = [
    { text: "Real Time Monitoring", icon: <Shield />, selected: true },
    { text: "Alerts", icon: <Notifications />, selected: false },
    { text: "Statistics", icon: <BarChart />, selected: false },
    { text: "User Control", icon: <People />, selected: false },
    { text: "Awareness", icon: <School />, selected: false },
  ];
  
  const bottomItems = [
    { text: "Settings", icon: <Settings /> },
    { text: "Log Out", icon: <Logout /> },
  ];
  
  const CustomNavigationDrawer = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
  
    return (
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": { width: 240, boxSizing: "border-box" },
        }}
      >
        {/* Usuario */}
        <Box sx={{ textAlign: "center", p: 2 }}>
          <Avatar 
            src="https://upload.wikimedia.org/wikipedia/en/6/6a/Mike_Wazowski.png" 
            sx={{ 
              width: 64, 
              height: 64, 
              margin: "auto", 
              border: "2px solid #000" 
            }} 
          />
          <Typography variant="h6">Mike</Typography>
          <Typography variant="body2" color="textSecondary">
            mikewazowski@gmail.com
          </Typography>
        </Box>
  
        <Divider />
  
        {/* Menú principal */}
        <List>
          {menuItems.map((item, index) => (
            <ListItemButton
              key={item.text}
              selected={selectedIndex === index}
              onClick={() => setSelectedIndex(index)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          ))}
        </List>
  
        <Box sx={{ flexGrow: 1 }} />
  
        {/* Opciones de abajo */}
        <List>
          {bottomItems.map((item) => (
            <ListItemButton key={item.text}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    );
  };
  
  export default CustomNavigationDrawer;
  