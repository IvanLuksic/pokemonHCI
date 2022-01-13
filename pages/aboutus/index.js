import { Grid, useState } from '@mui/material'
import React from 'react'
import AuthorsSection from '../../components/authorsSection'
import ContentContainer from '../../components/contentContainer'
import PageHeading from '../../components/pageHeading'
import MdSection from '../../components/mdSection'
import aboutUs from '../../staticFiles/aboutUs.json'
import DataSourceApi from '../../lib/DataSourceApi'

export default function AboutUs({ sections }) {

    return (
        <div className='container'>
            <ContentContainer>
                <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ width: "100%" }}>
                    <PageHeading heading="About us" xs={10} sx={{ textAlign: "left" }} />
                    <Grid item xs={10} sx={{ pb: "4em" }}>
                        {
                            sections.map((section) => (
                                section.authors != undefined
                                    ? (
                                        <AuthorsSection {...section} />
                                    ) : (
                                        section.markdown != undefined
                                            ? (
                                                <MdSection key={section.sys.id} {...section} />
                                            ) : (
                                                null
                                            )
                                    )
                            ))
                        }
                    </Grid>
                </Grid>
            </ContentContainer>
        </div>
    )
}

export async function getStaticProps() {

    const sections = await DataSourceApi.getAboutUs();

    return {
        props: {
            sections,
        },
    };
}
