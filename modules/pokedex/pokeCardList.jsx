import { Grid } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import PokemonList from '../../staticFiles/pokemonList.json'
import PokedexCard from './pokedexCard'

export default function PokeCardList({searchResult}) {

    let pokemonCards = searchResult.map( value => (PokemonList[value - 1]))
    console.log(pokemonCards)
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" sx={{width: '100%', mt: "2em",mb: "2em"}}>
            {pokemonCards.map( ({id,name, type}) => (
                <Link href={`/pokemon/${name}`} key={id} passHref>
                    <Grid item md={5} xs={11} sx={{margin: "0.5em", cursor:"pointer"}}>
                        <PokedexCard name={name} id={id} type={type[0]} />
                    </Grid>
                </Link>
            ))}
        </Grid>
    )
}
