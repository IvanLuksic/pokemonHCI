import { Grid, Typography } from '@mui/material'
import React from 'react'
import SectionContainer from '../modules/sectionConteiner'
import AuthorCard from '../modules/author/authorCard'

export default function AuthorsSection({ title, authors }) {

    return (
        <SectionContainer title={title}>
            {
                authors.map((authorCard) =>
                    <Grid item xs={12} md={6} sx={{ textAlign: "left", pr: "3em" }}>
                        <AuthorCard authorImageUrl={authorCard.authorImageUrl} authorName={authorCard.authorName} authorWork={authorCard.authorWork} />
                    </Grid>
                )
            }
        </SectionContainer>
    )
}
