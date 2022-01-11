import { Grid, Typography } from '@mui/material'
import React from 'react'
import SectionContainer from '../modules/sectionConteiner'

export default function MdSection({ title, markDown }) {

    return (
        <SectionContainer title={title}>
            <Grid item xs sx={{ textAlign: "left" }}>
                <Typography variant="h6" sx={{ fontWeight: 100 }}>{markDown}</Typography>
            </Grid>
        </SectionContainer>
    )
}
