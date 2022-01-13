import { Grid, Typography } from '@mui/material'
import React from 'react'
import SectionContainer from '../modules/aboutUs/sectionConteiner'

export default function MdSection({ title, markdown }) {

    return (
        <SectionContainer title={title}>
            <Grid item xs sx={{ textAlign: "left" }}>
                {/* {Shoudld be deserialized markdown, not typography} */}
                <Typography variant="h6" sx={{ fontWeight: 100 }}>{markdown}</Typography>
            </Grid>
        </SectionContainer>
    )
}
