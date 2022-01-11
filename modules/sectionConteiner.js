import { Grid, Typography } from '@mui/material'
import React from 'react'
import AuthorCard from '../modules/author/authorCard'
import aboutUs from '../staticFiles/aboutUs.json'

export default function sectionContainer(props) {

    return (
        <Grid container direction="column" justifyContent="center" alignItems="center" sx={{ width: "100%", pt: "3em" }}>
            <Grid item xs sx={{ width: "100%", pb: "2em" }}>
                <Typography variant="h4" sx={{ fontWeight: 600 }}>{props.title}</Typography>
            </Grid>
            <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ width: "100%" }}>
                {props.children}
            </Grid>
        </Grid>
    )
}
