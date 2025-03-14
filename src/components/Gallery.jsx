import { Box, Container, Typography } from "@mui/material";
import React from "react";

export default function Gallery({ id }) {
  return (
    <Box
      id={id}
      sx={{ bgcolor: (theme) => theme.palette.common.white, py: 10 }}
    >
      <Container maxWidth="md">
        <Typography variant="h3"> Gallery </Typography>
      </Container>
    </Box>
  );
}
