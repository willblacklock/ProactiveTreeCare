import { Box, Container, Grid2, Typography, useTheme } from "@mui/material";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTree,
  faTruck,
  faScissors,
  faPersonDigging,
  faDumpster,
  faRecycle,
  faCubesStacked,
  faMound,
} from "@fortawesome/free-solid-svg-icons";

const services = [
  { name: "Tree care", icon: faTree },
  { name: "Tree removal", icon: faTruck },
  { name: "Hedge cutting/removal", icon: faScissors },
  { name: "Garden maintenance", icon: faPersonDigging },
  { name: "Garden/site clearances", icon: faDumpster },
  { name: "Green waste removal", icon: faRecycle },
  { name: "Logs", icon: faCubesStacked },
  { name: "Mulch", icon: faMound },
];

export default function Services({ id }) {
  const theme = useTheme();
  return (
    <Box
      id={id}
      sx={{ bgcolor: (theme) => theme.palette.background.main, py: 10 }}
    >
      <Container maxWidth="md">
        <Typography variant="h3" gutterBottom>
          {" "}
          Services{" "}
        </Typography>
        <Grid2 container spacing={2}>
          {services.map((service, index) => (
            <Grid2 key={index} size={{ xs: 6, sm: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  padding: 2,
                  width: "100%",
                }}
              >
                <FontAwesomeIcon
                  icon={service.icon}
                  style={{
                    fontSize: "60px",
                    color: theme.palette.primary.main,
                  }}
                />
                <Typography sx={{ mt: 2 }}>{service.name}</Typography>
              </Box>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
}
