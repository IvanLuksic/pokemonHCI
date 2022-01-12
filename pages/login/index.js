import ContentContainer from '../../components/contentContainer'
import React, { useEffect, useState, useContext } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { useRouter } from 'next/router'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { Grid, Paper, Typography } from '@mui/material';
import PageHeading from '../../components/pageHeading';
import {loginContext} from '../../components/context'



const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false,
    },
  };


export default function Login() {
    const {loginState} = useContext(loginContext)
    const router = useRouter()

    useEffect(() => {
       loginState ? router.push('/') : null
    }, [loginState])

    return (
        <div className='container'>
            <ContentContainer>
                <Grid container direction='row'   justifyContent="center" alignItems="center">
                    <PageHeading heading="Login" />
                    
                    <Grid item xs={10} md={6} lg={4} mt='2em' mb='4em'>
                        <Paper elevation={2} sx={{backgroundColor: "#f5f5f5", padding: "2em", borderRadius: 8, textAlign: 'center'}}>
                            <Typography variant='h5' color='primary' sx={{fontWeight: 600}}  mb='1em'>Choose a sign in option</Typography>
                            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                        </Paper>
                    </Grid>
                </Grid>
            </ContentContainer>
        </div>
    )
}
