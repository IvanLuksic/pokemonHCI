import { Grid } from "@mui/material"
import Image from "next/image"
import React from "react"

export default function HeroImage({ title, url, sxContainer }) {
	return (
		<Grid
			container
			direction="row"
			item
			xs
			sx={{
				width: "100%",
				height: { xs: "100px", sm: "200px" },
				position: "relative",
				...sxContainer
			}}
		>
			<Image src={url} layout="fill" objectFit="cover" alt={title} />
		</Grid>
	)
}
