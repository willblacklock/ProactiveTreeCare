import { Stack } from "@mui/material";
import React from "react";

export default function Accreditations() {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <img
        src="/images/nptc.png"
        style={{ maxWidth: "105px", width: "100%" }}
      />
      <img
        src="/images/c&gl2.png"
        style={{ maxWidth: "56px", width: "100%" }}
      />
      <img
        src="/images/c&gl4.png"
        style={{ maxWidth: "56px", width: "100%" }}
      />
      <img
        src="/images/c&gl5.png"
        style={{ maxWidth: "56px", width: "100%" }}
      />
    </Stack>
  );
}
