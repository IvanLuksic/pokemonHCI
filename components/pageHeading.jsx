import { Grid, Typography } from '@mui/material'
import React from 'react'

export default function PageHeading({heading, subheading}) {
    return (
        <Grid item xs={12} sx={{textAlign: 'center', mt: '1em'}} id="back-to-top-anchor">
         <Typography variant='h3' color="primary" sx={{fontWeight: 700}}>{heading}</Typography>
         <Typography variant='h6' sx={{color: "lightgray", fontWeight: 600}} >{subheading}</Typography>
        </Grid>
    )
}
