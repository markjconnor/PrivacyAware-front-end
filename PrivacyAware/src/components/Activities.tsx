import { Box, Card, CardContent, CardMedia, LinearProgress, Typography } from "@mui/material";


const activities = [


  {
    title: "Scanning Network",
    description: "Analyzing network traffic...",
    progress: 23,
    image: "https://picsum.photos/500",
  },
  {
    title: "User Behavior",
    description: "Detecting unusual logins...",
    progress: 89,
    image: "https://picsum.photos/501",
  },
  {
    title: "Threat Intelligence",
    description: "Gathering external data...",
    progress: 0,
    image: "https://picsum.photos/502",
  },
  {
    title: "System Hardening",
    description: "Applying security patches...",
    progress: 76,
    image: "https://picsum.photos/503",
  },

    {
        title: "Data Encryption",
        description: "Securing sensitive data...",
        progress: 100,
        image: "https://picsum.photos/504",
    },

    {
        title: "Firewall Protection",
        description: "Monitoring network traffic...",
        progress: 50,
        image: "https://picsum.photos/505",
    },

];

const Activities = () => {
    return (
      <Box
        sx={{
          display: "flex",             // Se alinea en fila
          flexWrap: "nowrap",          // Previene que se rompan las filas
          overflowX: "auto",           // Permite el desplazamiento horizontal
          gap: 2,                      // Espacio entre las tarjetas
          mb: 3,                       // Margen inferior
          py: 2,                       // Espaciado vertical
          scrollBehavior: "smooth",    // Suaviza el desplazamiento
          width: "100%",               // Ancho completo
          maxWidth: "100vw",           // No permite que el contenedor se haga más grande que la ventana
        }}
      >
        {activities.map((activity, index) => (
          <Card key={index} sx={{ minWidth: 250, flexShrink: 0 }}> {/* Impide que las tarjetas se reduzcan demasiado */}
            <CardMedia
              component="img"
              image={activity.image}
              alt={activity.title}
              sx={{
                height: { xs: 150, sm: 200, md: 250 },  // Ajuste dinámico según el tamaño de la pantalla
                width: "100%",
                objectFit: "cover",  // Ajusta la imagen sin distorsionarla
              }}
            />
            <CardContent>
              <Typography variant="h6">{activity.title}</Typography>
              <Typography variant="body2" color="textSecondary">
                {activity.description}
              </Typography>
              <LinearProgress variant="determinate" value={activity.progress} sx={{ mt: 1 }} />
            </CardContent>
          </Card>
        ))}
      </Box>
    );
  };
  
  export default Activities