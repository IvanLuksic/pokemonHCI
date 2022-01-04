import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';

const pages = ['Home', 'Pokedex', 'Buy', 'Blog', 'About us', 'Login'];

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" sx={{backgroundColor: "white", color: "black"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ mr: 1, display: { xs: 'none', md: 'flex' }, fontFamily: 'PokemonSolid' }}
            color="secondary"
            className='pokeFont'
          >
            Team Rocket
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
               <Link key={page} href={ page == 'Home' ? '/' : page.toLowerCase()} passHref>
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"  sx={{ fontFamily: 'PokemonSolid' }} color="primary"
                    className='pokeFont'>{page}</Typography>
                </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, fontFamily: 'PokemonSolid' }}
            color="secondary"
          >
            Team Rocket
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },justifyContent:'flex-end' }}>
            {pages.map((page) => (
              <Link key={page} href={ page == 'Home' ? '/' : page.toLowerCase()} passHref>
              <Button
                onClick={handleCloseNavMenu}
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

         
        </Toolbar>
      </Container>
    </AppBar>
  );
};