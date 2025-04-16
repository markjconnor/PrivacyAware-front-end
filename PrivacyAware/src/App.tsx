import { CssBaseline, GlobalStyles, Box } from "@mui/material";
import CustomNavigationDrawer from "./components/CustomNavigationDrawer";
import MainContainer from "./components/MainContainer";

const App = () => {
  return (
    <>
      <GlobalStyles
        styles={{
          body: {
            overflowX: "hidden",  // Desactiva el scroll horizontal
          },
        }}
      />
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <CustomNavigationDrawer />
        <MainContainer />
      </Box>
    </>
  );
};

export default App;