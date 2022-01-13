import { Grid, Typography } from "@mui/material";
import React from "react";
import AuthorCard from "../author/authorCard";
import aboutUs from "../../staticFiles/aboutUs.json";

export default function sectionContainer(props) {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ width: "100%", pt: "3em", pl: "1em" }}
    >
      <Grid item xs sx={{ width: "100%", pb: "0.5em" }}>
        <Typography variant="h4" sx={{ fontWeight: 600 }}>
          {props.title}
        </Typography>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{ width: "100%", pl: { xs: "0.5em", em: "1em" } }}
      >
        {props.children}
      </Grid>
    </Grid>
  );
}
