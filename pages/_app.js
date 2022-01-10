import '../styles/globals.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { useRouter } from 'next/router';
import Head from 'next/head'
import ScrollToTop from '../components/scrollToTop'
import {menuContext, cartContext} from '../components/context';
import React, {useState} from 'react'
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
    lightLightGray: "#F5F5F5",
  }
});

function MyApp({ Component, pageProps }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const router = useRouter()

  return ( 
            <ThemeProvider theme={theme}>
               <Head>
                  <title>{router.pathname.charAt(1).toUpperCase() + router.pathname.substring(2)} | Team Rocket</title>
                  <link rel="preconnect" href="https://fonts.googleapis.com" />
                  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                  <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"></link>
                  <meta property="og:title" content="My page title" key="title" />
               </Head>
               
               <menuContext.Provider value={{ menuOpen, setMenuOpen }}>
                  <Navbar/>
                  <cartContext.Provider value={{cartItems, setCartItems}}>
                    <Component {...pageProps}/>
                  </cartContext.Provider>
               </menuContext.Provider>
               <Footer/>

               <ScrollToTop />

            </ThemeProvider>
         )
}

export default MyApp
