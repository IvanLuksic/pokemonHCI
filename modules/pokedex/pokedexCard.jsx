import { Grid, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import TypeToColor from '../../staticFiles/correspondingTypeColor.json'

export default function PokedexCard({name, id, type}) {

    console.log( type + TypeToColor[type])
    return (
        <Paper elevation={3} style={{width: "100%", height: "100%", background: `linear-gradient(to top, ${TypeToColor[type]},35%, transparent)`}}>
            <Grid container direction="row" justifyContent="center" alignItems="flex-end" >
                <Grid item xs={8} sx={{textAlign: "right", mt:"1em"}}>
                    <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} width={200} height={200} alt={name}/>
                </Grid>
                <Grid item xs={4} sx={{textAlign: "center"}}>
                    <Typography variant="h6" sx={{fontWeight: 600}}>{name}</Typography>
                </Grid>
              
            </Grid>
        </Paper>
    )
}
