import { Box, Container, Typography } from "@mui/material";
import React from "react";

export default function Contact({ id }) {
  return (
    <Box
      id={id}
      sx={{ bgcolor: (theme) => theme.palette.background.main, py: 10 }}
    >
      <Container maxWidth="md">
        <Typography variant="h3"> Contact us </Typography>
      </Container>
    </Box>
  );
}
