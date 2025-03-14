import React, { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import {
  Box,
  ButtonBase,
  Container,
  Dialog,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const itemData = [
  {
    img: "/images/gallery1.jpg",
    title: "Professional Tree Pruning",
    description: "Enhancing tree health and structure with expert pruning",
  },
  {
    img: "/images/gallery2.jpg",
    title: "Garden Bed Restoration",
    description: "Clearing old plants and weeds to rejuvenate your garden",
  },
  {
    img: "/images/gallery3.jpg",
    title: "Large Tree Maintenance",
    description: "Trimming heavy branches for safety and tree longevity",
  },
  {
    img: "/images/gallery4.png",
    title: "Precision Hedge Trimming",
    description: "Shaping and maintaining hedges for a neat, polished look",
  },
  {
    img: "/images/gallery5.png",
    title: "Ornamental Shrub Shaping",
    description: "Expertly sculpting bushes to enhance landscape aesthetics",
  },
  {
    img: "/images/gallery6.png",
    title: "Log Cutting & Processing",
    description: "Converting felled trees into firewood-ready logs",
  },
  {
    img: "/images/gallery7.png",
    title: "Safe Tree Felling & Removal",
    description: "Removing unwanted or hazardous trees with care",
  },
  {
    img: "/images/gallery8.png",
    title: "Garden Clearance Services",
    description: "Preparing your outdoor space for new planting or landscaping",
  },
  {
    img: "/images/gallery9.jpeg",
    title: "Tree Canopy Reduction",
    description: "Cutting back overgrown trees to improve sunlight and airflow",
  },
];

export default function Gallery({ id }) {
  const theme = useTheme();
  const [selectedImage, setSelectedImage] = useState(null);

  // Open the modal when an image is clicked
  const handleOpen = (item) => {
    setSelectedImage(item);
  };

  // Close the modal
  const handleClose = () => {
    setSelectedImage(null);
  };
  return (
    <Box
      id={id}
      sx={{
        bgcolor: (theme) => theme.palette.common.white,
        py: { xs: 5, sm: 10 },
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h3" gutterBottom>
          Gallery
        </Typography>
        <ImageList
          sx={{ width: "100%", mt: 3 }}
          cols={3}
          // rowHeight={300}
        >
          {itemData.map((item) => (
            <ImageListItem
              component={ButtonBase}
              key={item.img}
              sx={{ height: "300px", position: "relative", overflow: "hidden" }}
              onClick={() => handleOpen(item)}
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              {/* Overlay Box - Appears on Hover */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  bgcolor: (theme) => `${theme.palette.primary.main}CC`, // Primary color with transparency (CC = 80% opacity)
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  color: "white",
                  padding: 2,
                  opacity: 0, // Hidden by default
                  transition: "opacity 0.3s ease-in-out",
                  [theme.breakpoints.up("sm")]: {
                    "&:hover": { opacity: 1 },
                  },
                }}
              >
                <Typography
                  sx={{
                    typography: { xs: "body1", sm: "h6" },
                  }}
                >
                  <b>{item.title}</b>
                </Typography>

                <Typography
                  sx={{
                    typography: { xs: "caption", sm: "body2" },
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            </ImageListItem>
          ))}
        </ImageList>

        <Dialog open={Boolean(selectedImage)} onClose={handleClose} fullScreen>
          <Box
            sx={{
              position: "relative",
              bgcolor: "rgba(0, 0, 0, 0.8)",
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Close Button */}
            <IconButton
              onClick={handleClose}
              sx={{ position: "absolute", top: 10, right: 10, color: "white" }}
            >
              <CloseIcon fontSize="large" />
            </IconButton>

            {/* Title & Description */}
            {selectedImage && (
              <Box sx={{ textAlign: "center", mb: 2, px: 2, color: "white" }}>
                <Typography variant="h4" fontWeight="bold">
                  {selectedImage.title}
                </Typography>
                <Typography variant="body1">
                  {selectedImage.description}
                </Typography>
              </Box>
            )}

            {/* Fullscreen Image */}
            {selectedImage && (
              <Box
                sx={{
                  maxWidth: "90vw",
                  maxHeight: "80vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={selectedImage.img}
                  alt={selectedImage.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>
            )}
          </Box>
        </Dialog>
      </Container>
    </Box>
  );
}
