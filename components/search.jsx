import { Grid, Autocomplete, TextField, Chip } from '@mui/material'
import React, {useState, useEffect} from 'react'


export default function Search({autocompleteList, setSearchResult, chipList, searchType, searchPool}) {

    let [searchValue,setSearchValue] = useState("");
    let [chipValue,setChipValue] = useState("");

    useEffect(() => {

        if(searchType == 'pokemon')
            filterPokemon()
        else    
            filterBlog()    

        
     }, [chipValue,searchValue]);

    function chipClick(value){
        
        if(chipValue === value){
       
            setChipValue("");
       
        }else{
        
            setChipValue(value)
        
        }    
        
    }

    function filterPokemon(){

        if(!searchValue && !chipValue){
            
            setSearchResult(Array.from({length: 11}, () => Math.floor(Math.random() * 150 + 1)));
        
        }else if(!searchValue && chipValue){
            
            setSearchResult(autocompleteList.filter(value => value.type.includes(chipValue)).map(value => value.id))

        }else if(searchValue && !chipValue){

            setSearchResult(autocompleteList.filter(value => value.name.toUpperCase().includes(searchValue.toUpperCase())).map(value => value.id));
        
        }else{

            setSearchResult(autocompleteList.filter(value => value.type.includes(chipValue)).filter(value => value.name.toUpperCase().includes(searchValue.toUpperCase())).map(value => value.id));
        
        } 

    }

    function filterBlog(){

        if(!searchValue){

            setSearchResult(searchPool)

        } else {

            setSearchResult(

                searchPool.filter(
                    
                    value => value.title.toUpperCase().includes(searchValue.toUpperCase())
            
                    || value.content.toUpperCase().includes(searchValue.toUpperCase())
                
                    || value.authorName.toUpperCase().includes(searchValue.toUpperCase())
            
                ).map(value => value)

            );

        }

    }


    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" sx={{width: '100%', mt: "1em", textAlign: 'center'}} >
           
            <Grid item md={11} xs={11}>
                
                <Autocomplete freeSolo
                    onChange={(event, newValue) => {
                        setSearchValue(newValue);
                      }}
                    options={autocompleteList != null ? autocompleteList.map(value => value.name) : []}
                    renderInput={(params) => <TextField {...params}
                    fullWidth label="Search..." />}
                />
            </Grid>

            <Grid item md={11} xs={11} sx={{width: '100%', mt: "2em"}} >
                
                {chipList != null ? (
                    chipList.map(value => 
                        <Chip label={value} key={value} color={chipValue === value ? "primary" : 'default'} onClick={() => chipClick(value)} />
                    ))
                    : null}

            </Grid>
        </Grid>
    )
}
