import { TextField, InputAdornment, IconButton, Box, Typography } from "@mui/material";
import { Search, Notifications } from "@mui/icons-material";

const SearchBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "80%",
        mb: 3,
      }}
    >
      {/* Título de la App */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          fontFamily: "'Roboto', sans-serif", // Cambia esto a la fuente corporativa que prefieras
          color: "#333", // Color oscuro para resaltar
        }}
      >
        PrivacyAware
      </Typography>

      {/* Barra de búsqueda */}
      <Box sx={{ flexGrow: 1, mx: 2 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search for threats"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* Icono de notificaciones */}
      <IconButton color="primary">
        <Notifications />
      </IconButton>
    </Box>
  );
};

export default SearchBar;
