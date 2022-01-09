import { Grid } from '@mui/material'
import React, { useState, useEffect } from 'react'
import ContentContainer from '../../components/contentContainer'
import Search from '../../components/search'
import PokeCardList from '../../components/pokeCardList'
import PokemonList from '../../staticFiles/pokemonList.json'
import TypeToColorList from '../../staticFiles/correspondingTypeColor.json'
import PageHeading from '../../components/pageHeading'
import Cart from '../../modules/store/cart'

export default function Buy() {

    let [cartItems, setCartItems] = useState([]);
    let isCart = false

    useEffect(() => {
        if(cartItems.length > 0){
            isCart = true
        }

    }, [cartItems])

    let [searchResult, setSearchResult] = useState(Array.from({ length: 11 }, () => Math.floor((Math.random() * 150) + 1)));
    /*console.log(new Array(11).fill().map((a, i) => a = i).sort(() => Math.random() - 0.5));

    console.log(JSON.stringify(PokemonList.map(({id, name, type}) => ( {id, name, type}))))
    console.log(AutocompleteList)*/
    return (
        <div className='container'>
            <ContentContainer>
                <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ width: "100%" }}>
                    <PageHeading heading="Buy NFTs" subheading="Buy NFT Pokemon pictures" md={12} xs={11} />
                    <Grid item md={12} xs={11} >
                        <Search autocompleteList={PokemonList} searchType='pokemon' chipList={Object.getOwnPropertyNames(TypeToColorList)} setSearchResult={setSearchResult} />
                    </Grid>
                    <Grid item md={12} xs={11}>
                        <PokeCardList searchResult={searchResult} isPokedex={false} setCartItems={setCartItems}/>
                    </Grid>
                    {cartItems.length ? <Cart cartItems={cartItems} setCartItems={setCartItems}/>: null}
                </Grid>
                
            </ContentContainer>
        </div>
    )
}
