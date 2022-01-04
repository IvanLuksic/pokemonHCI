import { Grid, Paper } from '@mui/material'
import React from 'react'

export default function ContentContainer(props) {
    console.log(props)
    return (
        <Grid container direction="row" justifyContent="center" alignItems="strech">
            <Grid item xs={11} md={9} lg={8} sx={{ minHeight: "70.2vh"}}>
                <Paper sx={{marginTop: {md:"4.5em", sm: "4em", xs: "3.5em"}, height: "100%"}} elevation={4}>
                    {props.children}
                </Paper>
            </Grid>
        </Grid>
    )
}