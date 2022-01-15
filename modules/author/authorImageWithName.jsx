import { Grid, Typography } from "@mui/material"
import Link from "next/link"
import React from "react"
import AuthorImage from "./authorImage"

export default function AuthorImageWithName({ image, name, surname, nickname }) {
	return (
		<Grid container direction="column" sx={{ width: "100%", height: "flex" }}>
			<Grid item md sx={{ width: "100%", aspectRatio: "1" }}>
				<Link href={`/aboutUs`} passHref>
					<a>
						<AuthorImage {...image} />
					</a>
				</Link>
			</Grid>
			<Grid item md sx={{ height: "100%", width: "100%", textAlign: "center", pt: "0.25em", pb: "1em" }}>
				<Typography>
					<b>by: </b> {name != null ? name + " " + surname : nickname}
				</Typography>
			</Grid>
		</Grid>
	)
}
