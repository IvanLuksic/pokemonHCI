import { Grid } from "@mui/material"
import Image from "next/image"
import React from "react"

export default function HeroImage({ title, url }) {
	return (
		<Grid
			container
			direction="row"
			item
			xs
			sx={{
				width: "100%",
				height: "500px",
				position: "relative"
			}}
		>
			<Image src={url} layout="fill" objectFit="cover" alt={title} />
		</Grid>
	)
}
