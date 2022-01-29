import React from "react"
import PokeCardList from "../../components/pokeCardList"
import PokemonInfoContainer from "../pokedex/pokemonInfoContainer"
import Link from "next/link"
import { Button } from "@mui/material"

export default function BuyPreview() {
	return (
		<PokemonInfoContainer fullWidth heading="Buy">
			<PokeCardList searchResult={Array.from({ length: 4 }, () => Math.floor(Math.random() * 150 + 1))} />
			<div style={{ height: "4em" }}>
				{" "}
				<Link href="/buy" passHref>
					<Button
						variant="contained"
						sx={{ float: "right", mr: "2em", mt: "0.5em", minHeight: { xs: "3em", md: "3.5em" } }}
					>
						See more to buy
					</Button>
				</Link>
			</div>
		</PokemonInfoContainer>
	)
}
