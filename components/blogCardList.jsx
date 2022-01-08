import { Grid } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import BlogCard from '../modules/blog/blogCard'

export default function BlogCardList({searchResult}) {

    return (
        <Grid container direction="column" justifyContent="center" alignItems="center" sx={{width: '100%', mt: "2em",mb: "2em"}}>
            {searchResult.map(blogCard => 
                <Link href={`/blog/${blogCard.title}`} key={Math.random()} passHref>
                    <Grid item xs={12} sx={{ mb: {xs: "1em", md: "2em"}, cursor:"pointer" }}>
                        <BlogCard title={blogCard.title} content={blogCard.content} imgUrl={blogCard.imgUrl} imgDescription={blogCard.imgDescription} authorName={blogCard.authorName} authorImgUrl={blogCard.authorImgUrl}/>
                    </Grid>
                </Link>
            )}
        </Grid>
    )
}