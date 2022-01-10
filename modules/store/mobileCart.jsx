import { Grid, Typography, Divider, Button } from '@mui/material'
import React, {useState, useEffect, useContext} from 'react'
import CartItem from './cartItem'
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import {menuContext} from '../../components/context';
const drawerBleeding = 56;

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.lightLightGray,
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.primary.main,
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));


export default function MobileCart({cartItems, setCartItems}) {

    const { menuOpen } = useContext(menuContext);

    let [handleDelete, setHandleDelete] = useState(null);
    useEffect(() => {
        setCartItems((old)=> (old.filter(item => item.id != handleDelete)))
    }, [handleDelete])

    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };

    return (
        <Grid item xs={12}>
{ !menuOpen ? <>
            <Global
                    styles={{
                    '.MuiDrawer-root > .MuiPaper-root': {
                        height: `calc(50% - ${drawerBleeding}px)`,
                        overflow: 'visible',
                    },
                    }}
                />


    <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        sx={{display: {md: 'none', sm: 'block', xs: 'block'}}}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
            <StyledBox
            sx={{
                position: 'absolute',
                top: -drawerBleeding,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                borderTop: '3px solid',
                borderColor: 'primary.main',
                visibility: 'visible',
                right: 0,
                left: 0,
            }}
            >
                <Puller />
                <Typography sx={{ p: 2, color: 'text.secondary' }}>Cart: {cartItems.length == 1 ? '1 item' : `${cartItems.length} items`} </Typography>
            </StyledBox>
            <StyledBox
            sx={{
                px: 2,
                pb: 2,
                height: '100%',
                overflow: 'auto',
            }}
            >
                 <Grid container direction="row" justifyContent="center" alignItems="center" >
                    {cartItems.map(item => <CartItem id={item.id} name={item.name} size={80} key={Math.random()} price={item.price} setHandleDelete={setHandleDelete}/>)}

                    <Grid item xs={12} mt="0.75em">
                        <Divider  variant="middle"></Divider>
                    </Grid>
                    <Grid item xs={10} mt='0.5em' sx={{textAlign: "left"}}>
                        <Typography color="primary" variant='p' sx={{fontWeight: 600}}>Subtotal: </Typography>
                        <Typography  variant='p' sx={{fontWeight: 600, float: 'right'}}>{cartItems.map(item => Number(item.price.split('.')[0])).reduce((acc,item)=> acc + item, 0)}.00€</Typography>
                    </Grid>
                    <Grid item xs={12} mt='0.5em' mb='0.5em' sx={{textAlign: "center"}}>
                        <Button variant="contained" color="primary" size="large">Place order</Button>
                    </Grid>
                 </Grid>
            </StyledBox>
      </SwipeableDrawer> </>
    : null}
        </Grid>
    )
}
