import { Button, Grid, Paper, Typography, useTheme } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import AuthorImage from '../author/authorImage'


export default function BlogCard({title, content, imgUrl, imgDescription, authorName, authorImgUrl}) {

    const theme = useTheme()
    
    return (
        <Paper elevation={3} style={{ width: "100%", height: "100%", background: theme.palette.lightLightGray }}>
            <Grid container direction="row" sx={{ p: "2em"}}>
                <Grid item xs={0} sm={3} sx={{ display: {xs: "none", sm: "flex"}, justifyContent: "center", alignIntems: "center"}}>
                    <Image src={imgUrl} width={"200%"} height={"200%"} alt={imgDescription} />
                </Grid>
                <Grid container item direction="column" xs={12} sm={9} md={7} sx={{ pl: { xs: "0em", sm: "2em" } }}>
                    <Grid item xs md={1} sx={{ height: "100%", width: "100%", pb: "0.5em", pr: "1em" }}>
                        <Typography variant="h4" sx={{ fontWeight: 600, textAlign: "left"}}>{title}</Typography>
                    </Grid>
                    <Grid item xs md={1} sx={{ height: "100%", width: "100%", pb: { xs: "0.5em", md: "0em" } }}>
                        <Typography variant="h6" sx={{ fontWeight: 100}}>{content}</Typography>
                    </Grid>
                    <Grid item xs md={0} sx={{ [theme.breakpoints.up('xs')]: { height: "100%", width: "100%" }, [theme.breakpoints.up('md')]: { display: "none"}, textAlign: "right" }}>
                        <Button variant="contained">Read more...</Button>
                    </Grid>
                </Grid>
                <Grid container item direction="column" xs={0} md={2} sx={{ [theme.breakpoints.down('md')]: { display: "none" }, [theme.breakpoints.up('md')]: { display: "flex" }, pl: "1em"}}>
                    <Grid item md sx={{ width:"100%", aspectRatio: "1" }}>
                        <AuthorImage authorImgUrl={authorImgUrl} authorName={authorName}/>
                    </Grid>
                    <Grid item md sx={{ height: "100%", width: "100%", textAlign: "center", pt: "0.25em", pb: "1em" }}>
                        <Typography>by: {authorName}</Typography>
                    </Grid>
                    <Grid item md sx={{ display: "flex", alignItems: "flex-end"}}>
                        <Button variant="contained" sx={{ minWidth: "100%" }}>Read more...</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}
