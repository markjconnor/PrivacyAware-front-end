import { Box } from "@mui/material";
import SearchBar from "./SearchBar";
import Activities from "./Activities";
import ThreatsList from "./ThreatsList";


const MainContainer = () => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        backgroundColor: "#f5f5f5",
        minHeight: "100vh"
      }}
    >
      <SearchBar />
      <Activities />
      <ThreatsList />
    </Box>
  );
};

export default MainContainer;
