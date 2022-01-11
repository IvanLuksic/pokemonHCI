import { Grid, Typography } from '@mui/material'
import React from 'react'
import AuthorImage from '../author/authorImage'

export default function AuthorCard({ authorImageUrl, authorName, authorWork }) {

    return (
        <Grid container direction="column" xs sx={{ width: "100%", height: "100%" }}>
            <Grid item xs sx={{ width: { xs: "80%", sm: "50%", md: "70%"}, aspectRatio: "1", justifyContent: "center", pb: "1.5em"}}>
                <AuthorImage authorImgUrl={authorImageUrl} authorName={authorName} />
            </Grid>
            <Grid item xs sx={{ width: "100%", pb: "0.5em"}}>
                <Typography variant="h5" sx={{ fontWeight: 600}}>{authorName}</Typography>
            </Grid>
            <Grid item xs sx={{ width: "100%"}}>
                <Typography variant="h6" sx={{ fontWeight: 100}}>{authorWork}</Typography>
            </Grid>
        </Grid>
    )
}
