import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { Paper, Grid, Typography, Box } from "@mui/material"
import ContentContainer from "../../components/contentContainer"
import PokeCardList from "../../components/pokeCardList"
import Head from "next/head"
import Image from "next/image"
import PokemonInfoContainer from "../../modules/pokedex/pokemonInfoContainer"
import PokemonICCard from "../../modules/pokedex/pokemonICCard"
import TypeToColor from "../../staticFiles/correspondingTypeColor.json"

export default function Pokemon({ pokemon, pokeapi, color }) {
	let evolutions = []
	pokemon.next_evolution ? evolutions.push(...pokemon.next_evolution) : null
	pokemon.prev_evolution ? evolutions.push(...pokemon.prev_evolution) : null

	return (
		<div className="container">
			<ContentContainer>
				<Head>
					<title>{pokemon.name} | Team Rocket</title>
					<meta
						name="description"
						content={`Learn more about ${pokemon.name}. Team Rocket hosts pokedex of all generation 1 pokemon, blog and NFT purchasing platform`}
					/>
				</Head>
				<Grid container direction="row" justifyContent="center" alignItems="center" mb="3em">
					<Grid item xs={12} id="back-to-top-anchor">
						<Paper
							elevation={2}
							sx={{
								textAlign: "center",
								borderRadius: 0,
								background: `linear-gradient(to top, ${color},50%, transparent)`
							}}
						>
							<Image
								src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
								width={300}
								height={300}
								alt={pokemon.name}
							/>
						</Paper>
					</Grid>
					<Grid item xs={11} md={6} sx={{ textAlign: { md: "left", sm: "center", xs: "center" }, mt: "1em" }}>
						<Typography variant="h3" sx={{ fontWeight: 600 }}>
							{pokemon.name}
						</Typography>
					</Grid>
					<Grid item xs={11} md={5} sx={{ mt: "1em", textAlign: "right" }}>
						{pokemon.type.map((type) => (
							<Grid
								container
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
									mr: "1em"
								}}
							>
								<Grid item xs={12} sx={{ textAlign: "center", transform: "translateY(-0.35em)" }}>
									<p>{type}</p>
								</Grid>
							</Grid>
						))}
					</Grid>
					<Grid item xs={11}>
						<Grid container direction="row" justifyContent="center" alignItems="center" spacing={4}>
							<PokemonInfoContainer heading="Abilities">
								<Box sx={{ overflowY: "scroll", maxHeight: "10.5em" }}>
									{pokeapi.abilities.map((ability) => (
										<PokemonICCard
											key={ability.name}
											heading={ability.name}
											text={ability.effect_entries[1].short_effect}
										/>
									))}
								</Box>
							</PokemonInfoContainer>
							<PokemonInfoContainer heading="Moves">
								<Box sx={{ overflowY: "scroll", maxHeight: "10.5em" }}>
									{pokeapi.moves.map((moves) => (
										<PokemonICCard key={moves.move.name} heading={moves.move.name} />
									))}
								</Box>
							</PokemonInfoContainer>
							{evolutions.length ? (
								<PokemonInfoContainer fullWidth heading="Evolutions">
									<PokeCardList
										isPokedex
										searchResult={evolutions.map((evolution) => parseInt(evolution.num))}
									/>
								</PokemonInfoContainer>
							) : null}
						</Grid>
					</Grid>
				</Grid>
			</ContentContainer>
		</div>
	)
}

export async function getStaticPaths() {
	const pokemonList = require("../../staticFiles/pokemonList.json")

	const paths = pokemonList.map((post, index) => ({
		params: {
			pokemon: String(index + 1)
		}
	}))

	return {
		paths,
		fallback: false
	}
}

export const getStaticProps = async ({ params: { pokemon } }) => {
	const pokemonId = pokemon

	let ability
	let abilitiesList = []

	const PokeApi = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then((response) => response.json())
	const PokeApiAbilities = PokeApi.abilities

	for (let i = 0; i < PokeApiAbilities.length; i++) {
		ability = await fetch(PokeApiAbilities[i].ability.url).then((response) => response.json())

		abilitiesList.push(ability)
	}

	const PokeApiMoves = PokeApi.moves

	const pokeapiObj = {
		moves: PokeApiMoves,
		abilities: abilitiesList
	}

	const PokeList = require("../../staticFiles/pokemonList.json")
	const TypeToColor = require("../../staticFiles/correspondingTypeColor.json")

	return {
		props: {
			pokemon: PokeList[pokemonId - 1],
			pokeapi: pokeapiObj,
			color: TypeToColor[PokeList[pokemonId - 1].type[0]]
		},
		revalidate: 1
	}
}
