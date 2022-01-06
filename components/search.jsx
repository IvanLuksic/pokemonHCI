import { Grid, Autocomplete, TextField, Chip } from '@mui/material'
import React, {useState, useEffect} from 'react'


export default function Search({autocompleteList, setSearchResult, chipList}) {

    let [searchValue,setSearchValue] = useState("");
    let [chipValue,setChipValue] = useState("");

    let chipsValues = Object.getOwnPropertyNames(chipList)

    useEffect(() => {

        filter()

        
     }, [chipValue,searchValue]);

    function chipClick(value){
        
        if(chipValue === value){
       
            setChipValue("");
       
        }else{
        
            setChipValue(value)
        
        }    
        
    }

    function filter(){

        if(!searchValue && !chipValue){
            
            setSearchResult(Array.from({length: 11}, () => Math.floor(Math.random() * 150)));
        
        }else if(!searchValue && chipValue){
            
            setSearchResult(autocompleteList.filter(value => value.type.includes(chipValue)).map(value => value.id))

        }else if(searchValue && !chipValue){

            setSearchResult(autocompleteList.filter(value => value.name.toUpperCase().includes(searchValue.toUpperCase())).map(value => value.id));
        
        }else{

            setSearchResult(autocompleteList.filter(value => value.type.includes(chipValue)).filter(value => value.name.toUpperCase().includes(searchValue.toUpperCase())).map(value => value.id));
        
        } 

    }

    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" sx={{width: '100%', mt: "2em"}} >
           
            <Grid item md={11} xs={11}>
                <Autocomplete freeSolo
                    disableClearable
                    onChange={(event => setSearchValue(event.target.innerHTML))}
                    options={autocompleteList.map(value => value.name)}
                    renderInput={(params) => <TextField  {...params} InputProps={{...params.InputProps, type: 'search'}} 
                    onChange={(event => setSearchValue(event.target.value))} fullWidth label="Search..." />}
                />
            </Grid>

            <Grid item md={11} xs={11} sx={{width: '100%', mt: "2em"}} >
                {chipsValues.map(value => 
                    <Chip label={value} key={value} color={chipValue === value ? "primary" : 'default'} onClick={event => {chipClick(value)}} />
                )}

            </Grid>
        </Grid>
    )
}
