import React from 'react'
import { Grid, Paper, Typography, Button, Box } from '@mui/material'
import Image from 'next/image'
import SpeechBubble from '../../staticFiles/speechBubble.svg'


export default function BuyCard({name, id, type, price, isLogged}) {
    return (
        <Paper elevation={1} sx={{width: "100%", height: "100%", backgroundColor:"#F5F5F5",border: "2px solid", borderColor: "primary.main", borderRadius: 0}}>
            <Grid container direction="row" justifyContent="center" alignItems="center" >
                <Grid item xs={11} sx={{textAlign: "center", mt:"1em"}}>
                    <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} width={200} height={200} alt={name}/>
                </Grid>
                <Grid item xs={6} sx={{textAlign: "left"}}>
                    <Typography variant="h6">Name: <span style={{fontWeight: 600}}>{name}</span></Typography>
                    <Typography variant="h6">Type: <span style={{fontWeight: 600}}>{type}</span></Typography>
                </Grid>
                <Grid item xs={5} style={{textAlign: "center"}}>
                    <div style={{transform: 'translateY(1em)'}}><Image src={SpeechBubble} width={150} height={100} /></div>
                    <Box sx={{transform: {lg: 'translateY(-3.75em) translateX(-0.5em)',sm: 'translateY(-3.5em) translateX(-0.5em)', xs: 'translateY(-3.5em) translateX(-0.5em)'}}}>
                        <Typography variant="h6" sx={{fontWeight: 600}}>{price}</Typography>
                        </Box>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="outlined" color='primary' disabled={!isLogged} size="large" sx={{width: '100%', borderRadius: 0, borderColor: 'primary.main',transform: 'scale(1.01)'}}>Buy</Button>
                </Grid>
            </Grid>
        </Paper>
    )
}
