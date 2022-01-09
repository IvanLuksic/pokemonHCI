import { Grid, IconButton, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import ClearIcon from '@mui/icons-material/Clear';


export default function CartItem({name, id, price, size , setHandleDelete}) {

    

    return (
        <Grid item xs={10} mt='0.25em'>
            <Paper elevation={2}>
                <Grid container direction="row" justifyContent="flex-start" alignItems="center">

                    <Grid item xs={2}>

                         <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} width={size} height={size} alt={name}/>

                    </Grid>

                    <Grid item xs={5}>
                        <div style={{width:'100%', overflow: "hidden", textOverflow: "ellipsis"}} >
                        <Typography noWrap  variant='p' sx={{fontWeight: 600}} >{name}</Typography>
                        </div>
                    </Grid>

                    <Grid item xs={3} textAlign='right'>
                        <Typography variant='p' sx={{fontWeight: 600}}>{price}</Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <IconButton size="small" onClick={() => setHandleDelete(id)}>
                            <ClearIcon/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}
