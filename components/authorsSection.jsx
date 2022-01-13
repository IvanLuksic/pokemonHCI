import { Grid, Typography } from "@mui/material";
import React from "react";
import SectionContainer from "../modules/aboutUs/sectionConteiner";
import AuthorCard from "../modules/author/authorCard";

export default function AuthorsSection({ authors }) {
  return (
    <SectionContainer title="Who we are?">
      {authors.map((author) => (
        <Grid
          item
          xs={12}
          md={6}
          key={author.sys.id}
          sx={{ textAlign: "left", pr: "3em" }}
        >
          <AuthorCard {...author} />
        </Grid>
      ))}
    </SectionContainer>
  );
}
