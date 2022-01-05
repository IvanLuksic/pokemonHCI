import { Grid, Autocomplete, TextField } from '@mui/material'
import React, {useState} from 'react'


export default function Search({autocompleteList, setSearchResult}) {

    let filteredIds = []

    function filter(searchValue){

        if(!searchValue){
            setSearchResult(Array.from({length: 11}, () => Math.floor(Math.random() * 150)));
        }else{

            setSearchResult(autocompleteList.filter(value => value.name.toUpperCase().includes(searchValue.toUpperCase())).map(value => value.id));
        }
    }

    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" sx={{width: '100%', mt: "2em"}} >
            <Grid item md={11} xs={11}>
                <Autocomplete freeSolo
                    disableClearable
                    onChange={(event => filter(event.target.innerHTML))}
                    options={autocompleteList.map(value => value.name)}
                    renderInput={(params) => <TextField  {...params} InputProps={{...params.InputProps, type: 'search'}} 
                    onChange={(event => filter(event.target.value))} fullWidth label="Search..." />}
                />
            </Grid>

        </Grid>
    )
}
