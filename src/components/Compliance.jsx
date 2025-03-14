import { Box, Container, Grid2, Typography } from "@mui/material";
import React from "react";

export default function Compliance({ id }) {
  return (
    <Box
      id={id}
      sx={{ bgcolor: (theme) => theme.palette.common.white, py: 10 }}
    >
      <Container maxWidth="md">
        <Grid2 container spacing={8}>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            <Typography variant="h3" gutterBottom>
              {" "}
              Compliance{" "}
            </Typography>
            <Typography>
              All Proactive Tree Care staff are qualified with the correct City
              & Guilds/NPTC certificates. Our insurance policy covers up to £2
              million for your peace of mind. All staff are First-Aid Qualified.
              All our safety equipment is serviced, maintained and replaced when
              necessary.
            </Typography>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="/images/about.jpg" // ✅ Corrected path
                alt="About Section"
                style={{
                  width: "100%",
                  aspectRatio: "1 / 1",
                  objectFit: "cover",
                  borderRadius: 20,
                }}
              />
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}
