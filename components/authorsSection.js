import { Grid, Typography } from '@mui/material'
import React from 'react'
import SectionContainer from '../modules/sectionConteiner'
import AuthorCard from '../modules/author/authorCard'
import aboutUs from '../staticFiles/aboutUs.json'

export default function AuthorsSection(authors) {

    return (
        <SectionContainer title="Who are we?">
            {aboutUs.authors.map((authorCard) =>
                <Grid item xs={12} md={6} sx={{ textAlign: "left", pl: "1em", pr: "3em" }}>
                    <AuthorCard authorImageUrl={authorCard.authorImageUrl} authorName={authorCard.authorName} authorWork={authorCard.authorWork} />)
                </Grid>
            )}
        </SectionContainer>
    )
}
