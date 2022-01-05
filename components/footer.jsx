import React from 'react'
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Image from 'next/image';
import FooterMeow from '../staticFiles/footerMeow.png'
import Link from 'next/link';

const pages = ['Home', 'Pokedex', 'Buy', 'Blog', 'About us', 'Login'];

export default function Footer() {
    return (
            <Grid container direction="row" justifyContent="space-around" alignItems="center" spacing={2} style={{  position: 'relative', bottom: 0, backgroundColor: "#5C76FE", zIndex: 999}}>
                
                <Grid item sm={0} md={4} sx={{ display: { md: 'block',sm: 'none', xs: 'none' } }}>
                    <Typography color="white" variant="h5"> <b>Made by:</b> teamrocket@fesb.hr </Typography>
                </Grid>

                <Grid item xs={10} md={4} style={{transform: "translateY(-5.15em)", textAlign: "right"}}>
                    <Image src={FooterMeow} height={200} width={175}  alt="Footer Meowth"/>
                </Grid>

                {/*Ovo je da se prikazuje na mobilnom ispod slike, da ne clippaju*/}
                <Grid item xs={11} md={4} sx={{ display: { md: 'none', sm: 'block' }, textAlign: "center" }}>
                    <Typography color="white" variant="h5"> <b>Made by:</b> teamrocket@fesb.hr </Typography>
                </Grid>

                <Grid item xs={4} md={2} sx={{color: "white"}}>
                    <ul style={{ fontSize: "1em", fontWeight: 700}}>
                        {pages.map( page => (
                        <li key={page}>
                          <Link href={ page == 'Home' ? '/' : page.toLowerCase()} passHref>
                            <a>{page}</a>    
                          </Link>
                        </li>
                        ))}
                    </ul>
                </Grid>

            </Grid>
    )
}
