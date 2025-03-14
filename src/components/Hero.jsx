import { Box, Container } from "@mui/material";
import React from "react";
import Socials from "./Socials";

export default function Hero() {
  return (
    <Box
      sx={{
        bgcolor: (theme) => theme.palette.primary.main,
        height: "40vh",
        color: (theme) => theme.palette.primary.contrastText,
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <img
          src={"/images/primary-rectangle.png"}
          width={"50%"}
          style={{ marginTop: 15 }}
        ></img>
        <Socials />
      </Container>
    </Box>
  );
}
