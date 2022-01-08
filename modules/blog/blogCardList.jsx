import { Grid } from '@mui/material'
import React from 'react'
import BlogCard from './blogCard'

export default function BlogCardList({searchResult}) {

    return (
        <Grid container direction="column" justifyContent="center" alignItems="center" sx={{width: '100%', mt: "2em",mb: "2em"}}>
            {searchResult.map(blogCard => 
                <Grid item xs={12} sx={{ml: {xs: "1em", sm: "2em", md: "3em"}, mr: {xs: "1em", sm: "2em", md: "3em"}, mb: {xs: "1em", md: "2em"}, cursor:"pointer"}}>
                    <BlogCard title={blogCard.title} content={blogCard.content} imgUrl={blogCard.imgUrl} imgDescription={blogCard.imgDescription} authorName={blogCard.authorName} authorImgUrl={blogCard.authorImgUrl}/>
                </Grid> 
            )}
            
        </Grid>
    )
}
