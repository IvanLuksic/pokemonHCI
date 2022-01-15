import { Grid, Typography, useTheme } from "@mui/material"
import Link from "next/link"
import React from "react"
import SectionContainer from "../common/sectionConteiner"

export default function SimilarContentSection({ similarContent }) {
	const theme = useTheme()
	return (
		<Grid item xs={11} sx={{ display: "flex", pb: "4em" }}>
			<SectionContainer
				title="Read more similar content:"
				sxContainer={{ p: 0 }}
				sxContent={{ pl: 0 }}
				sxTitleContainter={{ pb: "1em" }}
			>
				<ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
					{similarContent.map((blog) => (
						<li key={blog.sys.id} style={{ paddingBottom: "0.5em" }}>
							<Typography variant="h7" sx={{ fontWeight: 600, color: theme.palette.primary.main }}>
								<Link href={`/blog/${blog.slug}`} passHref>
									<a>
										<u>{blog.title}</u>
									</a>
								</Link>
							</Typography>
						</li>
					))}
				</ul>
			</SectionContainer>
		</Grid>
	)
}
