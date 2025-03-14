import { Box, Container, Grid2, Typography } from "@mui/material";
import React from "react";

export default function About({ id }) {
  return (
    <Box
      id={id}
      sx={{ bgcolor: (theme) => theme.palette.common.white, py: 10 }}
    >
      <Container maxWidth="md">
        <Grid2 container spacing={8}>
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
          <Grid2 size={{ xs: 12, sm: 6 }}>
            <Typography variant="h3" gutterBottom>
              {" "}
              About{" "}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {" "}
              At Proactive Tree Care, we are dedicated to providing top-quality
              tree surgery and garden maintenance services that meet each of our
              valued customers&apos; unique needs.
            </Typography>

            <Typography variant="body1" gutterBottom>
              With years of experience in the industry, our skilled team is
              passionate about transforming and maintaining beautiful outdoor
              spaces, ensuring both safety and aesthetic appeal.
            </Typography>

            <Typography variant="body1" gutterBottom>
              We pride ourselves on offering a customer-focused approach, taking
              the time to understand your vision and requirements.
            </Typography>

            <Typography variant="body1" gutterBottom>
              Whether it’s expert tree care, hedge trimming, or garden
              maintenance, we deliver reliable solutions that exceed
              expectations.
            </Typography>

            <Typography variant="body1" gutterBottom>
              Your satisfaction is our top priority. We are here to help you
              keep your garden thriving, beautiful and healthy throughout the
              year.
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              {" "}
              The Proactive Tree Care Team{" "}
            </Typography>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}
