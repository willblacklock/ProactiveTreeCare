import React from "react";
import { Stack, IconButton, Button } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Socials() {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      {/* WhatsApp */}
      <IconButton
        color="inherit"
        href="https://wa.me/yourwhatsapplink"
        target="_blank"
      >
        <WhatsAppIcon
          fontSize="large"
          //   sx={{ color: (theme) => theme.palette.primary.contrastText }}
        />
      </IconButton>

      {/* Instagram */}
      <IconButton
        color="inherit"
        href="https://instagram.com/yourinsta"
        target="_blank"
      >
        <InstagramIcon
          fontSize="large"
          //   sx={{ color: (theme) => theme.palette.primary.contrastText }}
        />
      </IconButton>

      {/* Facebook */}
      <IconButton
        color="inherit"
        href="https://facebook.com/yourfacebook"
        target="_blank"
      >
        <FacebookIcon
          fontSize="large"
          //   sx={{ color: (theme) => theme.palette.primary.contrastText }}
        />
      </IconButton>

      {/* Contact Us Button */}
      <Button variant="outlined" href="#contact" color="inherit" size="small">
        Contact Us
      </Button>
    </Stack>
  );
}
