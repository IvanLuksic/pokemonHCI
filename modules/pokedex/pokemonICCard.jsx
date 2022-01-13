import { Typography, Paper } from '@mui/material'
import React from 'react'

export default function PokemonICCard({heading, text}) {
    return (
        <Paper sx={{width: '90%', mb: "0.5em", ml: "1em", paddingBottom: '1em'}}>
            <Typography variant="p" sx={{fontWeight: 700, mt: '1em',ml: '1em', display: "block"}}>{heading}</Typography>
            <Typography variant="p" sx={{mt: '1em',ml: '1em'}}>{text}</Typography>
        </Paper>
    )
}
