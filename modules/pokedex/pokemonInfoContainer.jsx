import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'

export default function PokemonInfoContainer(props) {
    return (

            <Grid item xs={12} md={props.fullWidth ? 12 : 6}>
                <Paper sx={{marginTop: {md:"4.5em", sm: "4em", xs: "3.5em"}, height: "100%", backgroundColor: "#f5f5f5", borderRadius: 8}} elevation={4}>
                    <Typography variant='h6' sx={{fontWeight: 600, ml: '1em', mt: '1em'}}>{props.heading}</Typography>
                    {props.children}
                </Paper>
            </Grid>
    )
}