import { Grid } from "@mui/material"
import React from "react"
import SectionContainer from "../modules/common/sectionConteiner"
import { MDXRemote } from "next-mdx-remote"
import components from "../modules/common/mdxComponents/index"

export default function MdSection({ title, content }) {
	return (
		<SectionContainer title={title}>
			<Grid item xs sx={{ textAlign: "left" }}>
				{/* {Shoudld be deserialized markdown, not typography} */}
				{/* <Typography variant="h6" sx={{ fontWeight: 100 }}>{markdown}</Typography> */}
				<MDXRemote {...content} components={components} lazy />
			</Grid>
		</SectionContainer>
	)
}
