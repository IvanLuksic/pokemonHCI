import React, {useState,useContext} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Divider from '@mui/material/Divider';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {menuContext} from "./context";


const drawerWidth = 240;

const pages = ['Home', 'Pokedex', 'Buy', 'Blog', 'About us', 'Login'];

export default function Navbar() {


  const { setMenuOpen } = useContext(menuContext);
  const [mobileOpen, setMobileOpen] = useState(false);

  const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    mobileOpen ? setTimeout(() => {setMenuOpen(!mobileOpen)}, 10) : setMenuOpen(!mobileOpen);
  };

  const drawer = (
    <div className='container' style={{height: "100%"}}>
      <Toolbar />
      <List>
        {pages.map((page) => (
          <React.Fragment key={page}>
            <Link href={ page == 'Home' ? '/' : page.toLowerCase()} passHref>
              <ListItem button onClick={handleDrawerToggle}>
                <ListItemText primary={page} primaryTypographyProps={{fontFamily: "PokemonSolid",color: "primary"}} />
              </ListItem>
            </Link>
            <Divider light/>
          </React.Fragment>
        ))}
      </List>
      
    </div>
  );

  return (
    <AppBar position="fixed" sx={{backgroundColor: "white", color: "black"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          {/*Desktop logo*/}
          <Link href='/' passHref>
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{ mr: 1, display: { xs: 'none', md: 'flex' }, fontFamily: 'PokemonSolid', cursor: 'pointer' }}
              color="secondary"
              className='pokeFont'
            >
              Team Rocket
            </Typography>
          </Link>


          {/*Mobile hamburger icon */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>         
              <IconButton
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleDrawerToggle}
                color="primary"
              >
                <MenuIcon />
              </IconButton>
          </Box>

          {/*Mobile logo*/}
          <Link href='/' passHref>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, fontFamily: 'PokemonSolid', cursor: 'pointer' }}
              color="secondary"
            >
              Team Rocket
            </Typography>
          </Link>  

          {/*Desktop navbar list*/}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },justifyContent:'flex-end' }}>
            {pages.map((page) => (
              <Link key={page} href={ page == 'Home' ? '/' : page.toLowerCase()} passHref>
              <Button
                sx={{ my: 2, display: 'block', fontFamily: 'PokemonSolid' }}
                color="primary"
                className='pokeFont'
                size='large'
                >
                {page}
              </Button>
              </Link>
            ))}
          </Box>


          {/*Mobile drawer menu*/}  
          <SwipeableDrawer
          variant="temporary"
          disableBackdropTransition={!iOS} disableDiscovery={iOS}
          open={mobileOpen}
          onOpen={handleDrawerToggle}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{ display: { xs: 'block', sm: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }, }}>
            {drawer}
          </SwipeableDrawer>
         
        </Toolbar>
      </Container>
    </AppBar>
  );
};






