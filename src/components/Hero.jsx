import { Box, Container } from "@mui/material";
import React from "react";
import Socials from "./Socials";

export default function Hero() {
  return (
    <Box
      sx={{
        bgcolor: (theme) => theme.palette.primary.main,
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
          src={"/images/logo&title-dark.png"}
          width={"70%"}
          style={{ marginTop: 35 }}
        />

        <Box sx={{ mt: 2, mb: 4 }}>
          <Socials contact={true} />
        </Box>
      </Container>
    </Box>
  );
}
