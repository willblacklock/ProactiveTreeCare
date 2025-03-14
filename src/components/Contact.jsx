import {
  Box,
  Container,
  Typography,
  Grid2,
  TextField,
  Button,
  IconButton,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import Socials from "./Socials";

export default function Contact({ id }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setLoading(false);

    if (response.ok) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      alert("Failed to send message.");
    }
  };

  return (
    <Box
      id={id}
      sx={{
        bgcolor: (theme) => theme.palette.background.main,
        py: { xs: 5, sm: 10 },
      }}
    >
      <Container maxWidth="md">
        <Grid2 container spacing={4} alignItems="flex-start">
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Typography variant="h3" gutterBottom>
              Contact Us
            </Typography>

            <Stack direction="row" alignItems="center" spacing={1}>
              <IconButton
                color="primary"
                href="tel:447713824997"
                target="_blank"
              >
                <PhoneIcon
                // fontSize="large"
                />
              </IconButton>

              <Typography variant="body1">+44 7713 824997</Typography>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={1}>
              <IconButton
                color="primary"
                href="mailto:proactivetreecare1@gmail.com"
                target="_blank"
              >
                <MailIcon
                // fontSize="large"
                />
              </IconButton>

              <Typography variant="body1">
                proactivetreecare1@gmail.com
              </Typography>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={1}>
              <IconButton
                color="primary"
                target="_blank"
                href="https://www.google.com/maps/search/?api=1&query=Chester+UK"
              >
                <LocationOnIcon
                // fontSize="large"
                />
              </IconButton>
              <Typography variant="body1"> Chester, UK </Typography>
            </Stack>

            {/* Social Icons */}
            <Box sx={{ mt: 2 }}>
              <Socials colour="primary" />
            </Box>
          </Grid2>

          {/* Right Column - Contact Form */}
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <TextField
                fullWidth
                name="name"
                label="Name"
                onChange={handleChange}
                value={formData.name}
              />
              <TextField
                fullWidth
                name="email"
                label="Email"
                type="email"
                onChange={handleChange}
                value={formData.email}
              />
              <TextField
                fullWidth
                name="phone"
                label="Phone"
                type="tel"
                onChange={handleChange}
                value={formData.phone}
              />
              <TextField
                fullWidth
                name="message"
                label="Message"
                multiline
                rows={4}
                onChange={handleChange}
                value={formData.message}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}
