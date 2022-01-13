import { Grid, Typography } from "@mui/material";
import React from "react";
import AuthorImage from "../author/authorImage";

export default function AuthorCard({ name, surname, nickname, image, about }) {
  const fullName =
    name +
    (surname != null ? " " + surname : "") +
    (nickname != undefined ? " - AKA " + nickname : "");

  return (
    <Grid
      container
      direction="column"
      xs
      sx={{ width: "100%", height: "100%" }}
    >
      <Grid
        item
        xs
        sx={{
          width: { xs: "80%", sm: "50%", md: "70%" },
          aspectRatio: "1",
          justifyContent: "center",
          pb: "1.5em",
        }}
      >
        <AuthorImage {...image} />
      </Grid>
      <Grid item xs sx={{ width: "100%", pb: "0.5em" }}>
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          {fullName}
        </Typography>
      </Grid>
      <Grid item xs sx={{ width: "100%" }}>
        <Typography variant="h6" sx={{ fontWeight: 100 }}>
          {about}
        </Typography>
      </Grid>
    </Grid>
  );
}
