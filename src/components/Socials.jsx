import React from "react";
import { Stack, IconButton, Button, Box } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Socials({ contact = false, colour = "inherit" }) {
  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      {/* WhatsApp */}
      <IconButton
        color={colour}
        href="https://wa.me/447713824997"
        target="_blank"
      >
        <WhatsAppIcon
          fontSize="large"
          //   sx={{ color: (theme) => theme.palette.primary.contrastText }}
        />
      </IconButton>

      {/* Instagram */}
      <IconButton
        color={colour}
        href="https://www.instagram.com/proactivetreecare"
        target="_blank"
      >
        <InstagramIcon
          fontSize="large"
          //   sx={{ color: (theme) => theme.palette.primary.contrastText }}
        />
      </IconButton>

      {/* Facebook */}
      <IconButton
        color={colour}
        href="https://www.facebook.com/profile.php?id=61570832400937"
        target="_blank"
      >
        <FacebookIcon
          fontSize="large"
          //   sx={{ color: (theme) => theme.palette.primary.contrastText }}
        />
      </IconButton>

      {/* Contact Us Button */}
      {contact && (
        <Box sx={{ pl: 1 }}>
          <Button
            variant="outlined"
            onClick={() => handleScrollToSection("contact")}
            color={colour}
            size="small"
          >
            Contact Us
          </Button>
        </Box>
      )}
    </Stack>
  );
}
