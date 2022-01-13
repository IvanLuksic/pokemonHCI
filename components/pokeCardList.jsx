import { Grid } from "@mui/material"
import Link from "next/link"
import React, { useContext } from "react"
import PokemonList from "../staticFiles/pokemonList.json"
import PokedexCard from "../modules/pokedex/pokedexCard"
import BuyCard from "../modules/store/buyCard"
import { loginContext } from "./context"

export default function PokeCardList({ searchResult, isPokedex, setCartItems }) {
	const { loginState } = useContext(loginContext)

	return (
		<Grid
			container
			direction="row"
			justifyContent="center"
			alignItems="center"
			sx={{ width: "100%", mt: "2em", mb: "5em" }}
		>
			{searchResult
				.map((value) => PokemonList[value - 1])
				.map(({ id, name, type }) =>
					isPokedex ? (
						<Link
							href={{ pathname: "/pokemon/[pokeId]", query: { pokeId: id } }}
							key={Math.random()}
							passHref
						>
							<Grid item md={5} xs={11} sx={{ margin: "0.5em", cursor: "pointer" }}>
								<PokedexCard name={name} id={id} type={type[0]} />
							</Grid>
						</Link>
					) : (
						<Grid item md={5} xs={11} sx={{ margin: "0.5em" }} key={Math.random()}>
							<BuyCard
								name={name}
								id={id}
								type={type[0]}
								setCartItems={setCartItems}
								price={Math.round(Math.random() * 150 + 1) + ".00€"}
								isLogged={loginState}
							/>
						</Grid>
					)
				)}
		</Grid>
	)
}
