import { Grid, Typography } from "@mui/material"
import React from "react"
import SectionContainer from "../modules/aboutUs/sectionConteiner"
import { MDXRemote } from "next-mdx-remote"

export default function MdSection({ title, content }) {
	return (
		<SectionContainer title={title}>
			<Grid item xs sx={{ textAlign: "left" }}>
				{/* {Shoudld be deserialized markdown, not typography} */}
				{/* <Typography variant="h6" sx={{ fontWeight: 100 }}>{markdown}</Typography> */}
				<MDXRemote {...content} lazy />
			</Grid>
		</SectionContainer>
	)
}
