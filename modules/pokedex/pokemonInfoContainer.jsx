import { Grid, Paper, Typography } from "@mui/material";
import React from "react";

export default function PokemonInfoContainer(props) {
  return (
    <Grid item xs={12} md={props.fullWidth ? 12 : 6}>
      <Paper 
        
        sx={{
          mt: '3em',
          backgroundColor: "#f5f5f5",
          borderRadius: 4,
          paddingBottom: "1em",
        }}
        elevation={4}
      >
        <Typography variant="h6" sx={{ fontWeight: 600, ml: "1em", mb: '0.5em', paddingTop: "0.5em" }}>
          {props.heading}
        </Typography>
        {props.children}
      </Paper>
    </Grid>
  );
}
