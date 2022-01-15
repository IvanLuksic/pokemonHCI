import { Grid, Typography, useTheme } from "@mui/material"
import React from "react"
import AuthorImageWithName from "../author/authorImageWithName"

export default function TitleHeader({ title, date, author }) {
	const theme = useTheme()
	const dateObj = new Date(date)

	return (
		<Grid container direction="row" xs={11} sx={{ display: "flex", pt: "2em", pb: "1em" }}>
			<Grid container item direction="column" xs md>
				<Grid item xs={1} sx={{ width: { sm: "80%" }, pb: "1em" }}>
					<Typography variant="h3" sx={{ fontWeight: 600 }}>
						{title}
					</Typography>
				</Grid>
				<Grid item xs={1}>
					<Typography variant="h6" sx={{ fontWeight: 600, color: theme.palette.primary.main }}>
						{dateObj.toLocaleString("hr-HR")}
					</Typography>
				</Grid>
			</Grid>
			<Grid
				container
				item
				xs={0}
				sm={2}
				sx={{ display: { xs: "none", sm: "flex" }, justifyContent: "flex-end", alignItems: "flex-start" }}
			>
				<AuthorImageWithName {...author} />
			</Grid>
		</Grid>
	)
}
