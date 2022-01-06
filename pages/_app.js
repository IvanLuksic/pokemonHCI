import '../styles/globals.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import {useRouter} from 'next/router';
import Head from 'next/head'

// Kreiranje teme i wrappanje komponenti da su primary(TR plava) i secondary(TR žuta)
// boje dostupni i primjenjeni u mui kroz cijeli projekt.

const theme = createTheme({
  palette: {
    primary: {
      main: "#5C76FE",
    },
    secondary: {
      main: "#FFCC03",
    },
  },
});

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  return ( 
            <ThemeProvider theme={theme}>
               <Head>
                  <title>{router.pathname.charAt(1).toUpperCase() + router.pathname.substring(2)} | Team Rocket</title>
                  <link rel="preconnect" href="https://fonts.googleapis.com" />
                  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                  <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"></link>
                  <meta property="og:title" content="My page title" key="title" />
               </Head>
               <Navbar/>
               <Component {...pageProps}/>
               <Footer/>
            </ThemeProvider>
         )
}

export default MyApp
