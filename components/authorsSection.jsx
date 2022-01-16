import { Grid, Typography } from "@mui/material"
import React from "react"
import SectionContainer from "../modules/common/sectionConteiner"
import AuthorCard from "../modules/author/authorCard"

export default function AuthorsSection({ authors }) {
	return (
		<SectionContainer title="Who we are?">
			{authors.map((author) => (
				<Grid
					item
					xs={12}
					md={6}
					key={author.sys.id}
					sx={{ textAlign: "left", pt: "2em", pr: "3em", pb: "1em" }}
				>
					<AuthorCard {...author} />
				</Grid>
			))}
		</SectionContainer>
	)
}
