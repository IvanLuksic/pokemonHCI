import { Grid, Paper, Typography, Divider, Button } from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import CartItem from "./cartItem";

export default function Cart({ cartItems, setCartItems }) {
  let [handleDelete, setHandleDelete] = useState(null);
  useEffect(() => {
    setCartItems((old) => old.filter((item) => item.id != handleDelete));
  }, [handleDelete]);

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  return (
    <Grid
      item
      xs={12}
      sx={{
        position: "fixed",
        width: "17.5%",
        right: 10,
        top: 100,
        display: { md: "block", sm: "none", xs: "none" },
      }}
    >
      <Paper
        sx={{
          width: "100%",
          backgroundColor: "#f5f5f5",
          borderRadius: 5,
          border: "2px solid",
          borderColor: "primary.main",
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Typography color="primary" variant="h6" sx={{ fontWeight: 600 }}>
              {" "}
              My cart{" "}
            </Typography>
          </Grid>

          {cartItems.map((item) => (
            <CartItem
              id={item.id}
              name={item.name}
              key={Math.random()}
              size={40}
              price={item.price}
              setHandleDelete={setHandleDelete}
            />
          ))}
          <Grid item xs={12} mt="0.75em">
            <Divider variant="middle"></Divider>
          </Grid>
          <Grid item xs={10} mt="0.5em" sx={{ textAlign: "left" }}>
            <Typography color="primary" variant="p" sx={{ fontWeight: 600 }}>
              Subtotal:{" "}
            </Typography>
            <Typography variant="p" sx={{ fontWeight: 600, float: "right" }}>
              {cartItems
                .map((item) => Number(item.price.split(".")[0]))
                .reduce((acc, item) => acc + item, 0)}
              .00€
            </Typography>
          </Grid>
          <Grid item xs={12} mt="0.5em" mb="0.5em" sx={{ textAlign: "center" }}>
            <Button variant="contained" color="primary">
              Place order
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
