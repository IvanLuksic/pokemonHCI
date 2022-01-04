import React from 'react'
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Image from 'next/image';
import FooterMeow from '../staticFiles/footerMeow.png'

export default function Footer() {
    return (
            <Grid container direction="row" justifyContent="space-evenly" alignItems="center" spacing={2} style={{  position: 'absolute', bottom: 0, backgroundColor: "#5C76FE"}}>
                
                <Grid item sm={0} md={4} sx={{ display: { md: 'block',sm: 'none', xs: 'none' } }}>
                    <Typography color="white" variant="h5"> <b>Made by:</b> teamrocket@fesb.hr </Typography>
                </Grid>

                <Grid item xs={11} md={4} style={{transform: "translateY(-5.15em)", textAlign: "right"}}>
                    <Image src={FooterMeow} height={200} width={175} style={{right: 0}}/>
                </Grid>

                {/*Ovo je da se prikazuje na mobilnom ispod slike, da ne clippaju*/}
                <Grid item xs={11} md={4} sx={{ display: { md: 'none', sm: 'block' }, textAlign: "center" }}>
                    <Typography color="white" variant="h5"> <b>Made by:</b> teamrocket@fesb.hr </Typography>
                </Grid>

                <Grid item xs={11} md={1} sx={{color: "white",textAlign: {md: "left", sm: "center", xs: "center"}}}>
                    <ul style={{ fontSize: "1.15em", fontWeight: 700}}>
                        <li>Home</li>
                        <li>Pokedex</li>
                        <li>Buy</li>
                        <li>Blog</li>
                        <li>About us</li>
                        <li>Login</li>
                    </ul>
                </Grid>

            </Grid>
    )
}
