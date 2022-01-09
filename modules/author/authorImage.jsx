import {Grid, Paper, useTheme } from '@mui/material'
import Image from 'next/image'
import React from 'react'


export default function AuthorImage({authorImgUrl, authorName}) {

    const theme = useTheme()
    
    return (
        <Paper elevation={3} sx={{ width: "100%", aspectRatio: "1", borderRadius: "50%", border: 3, borderColor: theme.palette.primary.main, overflow: "hidden"}}>
            <Grid container direction="row" item xs sx={{width: "100%", aspectRatio: "1", justifyContent: "center", alignItems: "center", textAlign: "center", lineHeight: "500%"}}>
                    <Image src={authorImgUrl} width={"200%"} height={"200%"} alt={authorName} />
            </Grid>
        </Paper>
    )
}
