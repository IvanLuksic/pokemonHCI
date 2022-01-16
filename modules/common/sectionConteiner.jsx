import { Grid, Typography } from "@mui/material"
import React from "react"

export default function SectionContainer(props) {
	return (
		<Grid
			container
			direction="column"
			justifyContent="center"
			alignItems="center"
			sx={{ width: "100%", pt: "3em", pl: "1em", ...props.sxContainer }}
		>
			<Grid item xs sx={{ width: "100%", pb: "0.5em", ...props.sxTitleContainter }}>
				<Typography
					variant={props.titleVariant != null ? props.titleVariant : "h4"}
					sx={{ fontWeight: 600, ...props.sxTitle }}
				>
					{props.title}
				</Typography>
			</Grid>
			<Grid
				container
				direction="row"
				justifyContent="flex-start"
				alignItems="flex-start"
				sx={{ width: "100%", pl: { xs: "0.5em", em: "1em" }, ...props.sxContent }}
			>
				{props.children}
			</Grid>
		</Grid>
	)
}
