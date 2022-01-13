import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Paper, Grid, Typography, Box } from "@mui/material";
import ContentContainer from "../../components/contentContainer";
import dynamic from "next/dynamic";
import Image from "next/image";
import PokemonInfoContainer from "../../modules/pokedex/pokemonInfoContainer";
import PokemonICCard from "../../modules/pokedex/pokemonICCard";
import { route } from "next/dist/server/router";
import PokemonList from "../../staticFiles/pokemonList.json";
import TypeToColor from "../../staticFiles/correspondingTypeColor.json";

export default function Pokemon() {
  const router = useRouter();
  const [pokemon, setPokemon] = useState(PokemonList[router.query.pokemon - 1]);

  const types = ["Grass", "Fire"];

  const abilities = [
    { heading: "Punch", text: "punch lorem lorem lorem" },
    { heading: "Punch", text: "punch lorem lorem lorem" },
    { heading: "Punch", text: "punch lorem lorem lorem" },
    { heading: "Punch", text: "punch lorem lorem lorem" },
    { heading: "Punch", text: "punch lorem lorem lorem" },
    { heading: "Punch", text: "punch lorem lorem lorem" },
    { heading: "Punch", text: "punch lorem lorem lorem" },
  ];

  console.log(router.query.pokemon);
  return (
    <div className="container">
      <ContentContainer>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="3em"
        >
          <Grid item xs={12} id="back-to-top-anchor">
            <Paper
              elevation={0}
              sx={{
                textAlign: "center",
                background: `linear-gradient(to top, ${
                  TypeToColor[types[1]]
                },50%, transparent)`,
              }}
            >
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${router.query.pokemon}.svg`}
                width={300}
                height={300}
                alt={router.query.pokemon}
              />
            </Paper>
          </Grid>
          <Grid item xs={11} md={6}>
            <Typography variant="h3" ml="1em" sx={{ fontWeight: 600 }}>
              {/*(PokemonList[router.query.pokemon - 1].name*/}
            </Typography>
          </Grid>
          <Grid item xs={11} md={6} sx={{ mt: "1em", textAlign: "right" }}>
            {types.map((type) => (
              <Grid
                direction="row"
                key={type}
                justifyContent="center"
                alignItems="center"
                sx={{
                  backgroundColor: TypeToColor[type],
                  padding: "1em",
                  borderRadius: "50%",
                  height: "5em",
                  width: "5em",
                  display: "inline-block",
                  mr: "1em",
                }}
              >
                <Grid
                  item
                  xs={12}
                  sx={{ textAlign: "center", verticalAlign: "middle" }}
                >
                  {type}
                </Grid>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={11}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={4}
            >
              <PokemonInfoContainer heading="Abilities">
                {abilities.map((ability) => (
                  <PokemonICCard
                    key={ability.heading}
                    heading={ability.heading}
                    text={ability.text}
                  />
                ))}
              </PokemonInfoContainer>
              <PokemonInfoContainer heading="Moves"></PokemonInfoContainer>
              <PokemonInfoContainer
                fullWidth
                heading="Evolutions"
              ></PokemonInfoContainer>
            </Grid>
          </Grid>
        </Grid>
      </ContentContainer>
    </div>
  );
}
