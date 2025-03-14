import { Box, Button, Container, Grid2, Typography } from "@mui/material";
import React from "react";
import Socials from "./Socials";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // ✅ Smooth scroll to top
  };

  return (
    <Box sx={{ py: 5, position: "relative" }}>
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Grid2
          container
          spacing={2}
          justifyContent={{ xs: "center", md: "space-between" }}
          alignItems="center"
        >
          <Grid2 size={{ xs: 12, sm: "auto" }}>
            <img
              src={"/images/logo&title-light.png"}
              width={"200px"}
              alt="Company Logo"
            />
          </Grid2>

          <Grid2
            size={{ xs: 12, sm: "auto" }}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Socials contact={true} colour="primary" />
          </Grid2>

          <Grid2 size={{ xs: 12, sm: "auto" }}>
            <Button
              variant="contained"
              size="small"
              color="primary"
              onClick={handleScrollToTop}
              startIcon={<ArrowUpwardIcon />}
            >
              Back to Top
            </Button>
          </Grid2>
        </Grid2>
        <Typography variant="body2" sx={{ mt: { xs: 3, md: 1 } }}>
          © Copyright {new Date().getFullYear()}
        </Typography>
      </Container>
    </Box>
  );
}
