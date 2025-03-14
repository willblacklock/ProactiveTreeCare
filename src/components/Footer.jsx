import { Box, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: (theme) => theme.palette.primary.main,
        height: 50,
      }}
    >
      <Typography color={(theme) => theme.palette.primary.contrastText}>
        {" "}
        © Copyright Proactive Tree Care {new Date().getFullYear()}
      </Typography>
    </Box>
  );
}
