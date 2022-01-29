import { Typography, Paper } from "@mui/material"
import React from "react"

export default function PokemonICCard({ heading, text }) {
	const capitalizeHeading = heading.charAt(0).toUpperCase() + heading.substring(1)
	return (
		<Paper
			sx={{
				width: "92.5%",
				mb: "0.5em",
				ml: "1em",
				paddingBottom: "0.5em",
				paddingTop: "0.5em",
				paddingLeft: "1em"
			}}
		>
			<Typography variant="p" sx={{ fontWeight: 700, display: "block" }}>
				{capitalizeHeading}
			</Typography>
			{text ? (
				<Typography variant="p" sx={{ mt: "1em" }}>
					{text}
				</Typography>
			) : null}
		</Paper>
	)
}
