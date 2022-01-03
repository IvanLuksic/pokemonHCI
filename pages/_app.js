import '../styles/globals.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
  return ( 
            <ThemeProvider theme={theme}>
               <Component {...pageProps}/>
            </ThemeProvider>
         )
}

export default MyApp
