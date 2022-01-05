import { Grid, Typography } from '@mui/material'
import React, {useState} from 'react'
import ContentContainer from '../../components/contentContainer'
import Search from '../../components/search'
import PokeCardList from '../../modules/pokedex/pokeCardList'
import PokemonList from '../../staticFiles/pokemonList.json'
import AutocompleteList from '../../staticFiles/autocompletePokemonNames.json'

export default function Pokedex() {

    let [searchResult,setSearchResult] = useState(Array.from({length: 11}, () => Math.floor(Math.random() * 150)));

    /*console.log(new Array(11).fill().map((a, i) => a = i).sort(() => Math.random() - 0.5));

    console.log(JSON.stringify(PokemonList.map(({name, id}) => ( {name, id}))))
    console.log(AutocompleteList)*/
    return (
        <div className='container'>
            <ContentContainer>
                <Grid container direction="row" justifyContent="center" alignItems="center"  sx={{width: "100%"}}>
                    <Grid item md={12} xs={11} >
                        <Search autocompleteList={AutocompleteList} setSearchResult={setSearchResult}/>
                    </Grid>
                    <Grid item md={12} xs={11} elevation={3}>
                        <PokeCardList searchResult={searchResult}/>
                    </Grid>
                </Grid>
            </ContentContainer>
        </div>
    )
}
