
import { Grid, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ContentContainer from '../components/contentContainer'
import psyduck from '../staticFiles/404psyduck.png'

export default function Custom404() {
    return (
        <div className='container'>
            <ContentContainer>
                <Grid container spacing={3}  direction="column" justifyContent="center" alignItems="center" sx={{ height: '52.2vh'}}> 
                    
                    <Grid item sx={{textAlign: 'center',marginTop: '3em'}}>
                        <Image src={psyduck} height={200} width={200} alt="confusedPokemon"></Image>

                        <Typography color='primary' variant="h4" sx={{fontFamily: 'pokemonSolid', paddingBottom:'0.5em'}}> 
                          404 | Page not found
                        </Typography> 
                        <Typography color='secondary' variant='h6' sx={{fontFamily: 'pokemonSolid'}}>

                            For more Pokemon return  
                            <Link href='/' passHref>
                                <a> <u>Home</u></a>
                            </Link>

                        </Typography>
                    </Grid>
                </Grid>
            </ContentContainer>
        </div>
    )
}
