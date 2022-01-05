import { Grid, Typography } from '@mui/material'
import React, {useState} from 'react'
import ContentContainer from '../../components/contentContainer'
import PokeCardList from '../../modules/pokedex/pokeCardList'
import AutocompleteList from '../../staticFiles/autocompletePokemonNames.json'

export default function Pokedex() {

    let [searchResult,setSearchResult] = useState([1,4,7,21,56,77,32,35,78,111,125]);

    /*console.log(JSON.stringify(PokemonList.pokemon.map((pokemon) => ( pokemon.name.toLowerCase()))))*/
    /*console.log(AutocompleteList)*/
    return (
        <div className='container'>
            <ContentContainer>
                <Grid container direction="column" justifyContent="center" alignItems="center"  sx={{width: "100%"}}>
                    <Grid item md={12} xs={11}>
                        {/*Search goes here*/}
                    </Grid>
                    <Grid item md={12} xs={11} elevation={3}>
                        <PokeCardList searchResult={searchResult}/>
                    </Grid>
                </Grid>
            </ContentContainer>
        </div>
    )
}
