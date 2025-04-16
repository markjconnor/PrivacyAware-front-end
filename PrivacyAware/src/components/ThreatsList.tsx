import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Snackbar,
  Alert
} from "@mui/material";

// Define the type for a threat
type Threat = {
  title: string;
  description: string;
  image: string;
};

// Initial threats data
const initialThreats: Threat[] = [
  {
    title: "Instagram",
    description: "Instagram has updated its privacy policy",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/640px-Instagram_icon.png",
  },
  {
    title: "Netflix",
    description: "Netflix had a data breach",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg",
  },
  {
    title: "Android",
    description: "New Android Security Patch is available",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Android_robot.svg/640px-Android_robot.svg.png",
  },
  {
    title: "Malware Detected",
    description: "Infected file in downloads",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Virus_malware_hazard_icon.svg/1200px-Virus_malware_hazard_icon.svg.png",
  },
  {
    title: "Phishing Attempt",
    description: "Suspicious email pretending to be from PayPal",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Phishing.svg/1024px-Phishing.svg.png",
  },
  {
    title: "Facebook",
    description: "Unusual login attempt detected",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
  },
  {
    title: "Google Drive",
    description: "Unauthorized file access attempt",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo.png",
  },
  {
    title: "Zoom",
    description: "Zero-day vulnerability discovered",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_Communications_Logo.svg",
  },
  {
    title: "Twitter/X",
    description: "Account locked due to suspicious activity",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/X_logo_2023.svg/640px-X_logo_2023.svg.png",
  },
  {
    title: "LinkedIn",
    description: "Possible credential stuffing detected",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
  },
  {
    title: "Spotify",
    description: "Session hijack warning",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
  },
  {
    title: "Apple iCloud",
    description: "Login from unknown device",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    title: "Discord",
    description: "Potential malicious bot detected in server",
    image:
      "https://upload.wikimedia.org/wikipedia/en/9/98/Discord_logo.svg",
  },
  {
    title: "TikTok",
    description: "Security alert: App tried accessing location in background",
    image:
      "https://upload.wikimedia.org/wikipedia/en/6/69/TikTok_logo.svg",
  },
  {
    title: "YouTube",
    description: "Suspicious comment flagged as scam",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg",
  },
  {
    title: "Outlook",
    description: "Possible email spoofing attempt",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4e/Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg",
  },
  {
    title: "Firefox",
    description: "New browser vulnerability reported",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a0/Firefox_logo%2C_2019.svg",
  },
  {
    title: "Microsoft Teams",
    description: "Insecure file shared in chat",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg",
  },
  {
    title: "Steam",
    description: "Suspicious purchase activity",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg",
  },
  {
    title: "Reddit",
    description: "Account flagged for unusual behavior",
    image:
      "https://upload.wikimedia.org/wikipedia/en/8/82/Reddit_logo_and_wordmark.svg",
  },
];

const ThreatsList: React.FC = () => {
  // State to hold the list of threats
  const [threatList, setThreatList] = useState<Threat[]>(initialThreats);
  // State for dialog open/close and selected threat to investigate
  const [open, setOpen] = useState(false);
  const [selectedThreat, setSelectedThreat] = useState<Threat | null>(null);

  // Opens dialog and sets selected threat for investigating
  const handleInvestigate = (threat: Threat) => {
    setSelectedThreat(threat);
    setOpen(true);
  };

  // Dismiss threat (delete threat from list)
  const handleDismiss = (index: number) => {
    setThreatList((prevThreats) =>
      prevThreats.filter((_, i) => i !== index)
    );
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    // Show snackbar when a threat is dismissed
    setSnackbarOpen(true);

    // Snackbar close handler
    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    // Add the Snackbar component
    <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: "100%" }}>
            Threat dismissed successfully!
        </Alert>
    </Snackbar>;
  };

  // Close the dialog
  const handleCloseDialog = () => {
    setOpen(false);
    setSelectedThreat(null);
  };

  return (
    <Box sx={{ width: "80%", maxWidth: "100vw" }}>
      <List>
        {threatList.map((threat, index) => (
          <ListItem
            key={index}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <ListItemAvatar>
              <Avatar src={threat.image} />
            </ListItemAvatar>
            <ListItemText
              primary={threat.title}
              secondary={threat.description}
              primaryTypographyProps={{ style: { color: "black" } }}
              secondaryTypographyProps={{ style: { color: "grey" } }}
            />
            <Box>
              <Button
                variant="contained"
                color="primary"
                sx={{ mr: 1 }}
                onClick={() => handleInvestigate(threat)}
              >
                Investigate
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => handleDismiss(index)}
              >
                Dismiss
              </Button>
            </Box>
          </ListItem>
        ))}
      </List>

      {/* Dialog for threat investigation */}
      <Dialog open={open} onClose={handleCloseDialog}>
        <DialogTitle>{selectedThreat?.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {selectedThreat?.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ThreatsList;
