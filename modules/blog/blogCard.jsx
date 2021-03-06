import { Button, Grid, Paper, Typography, useTheme } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import AuthorImageWithName from "../author/authorImageWithName"

export default function BlogCard({ title, summary, cardImage, author, slug }) {
	const theme = useTheme()

	return (
		<Paper elevation={3} style={{ width: "100%", height: "100%", background: theme.palette.lightLightGray }}>
			<Grid container direction="row" sx={{ p: "2em" }}>
				<Grid
					item
					xs={0}
					sm={3}
					sx={{ display: { xs: "none", sm: "flex" }, justifyContent: "center", alignIntems: "center" }}
				>
					<Image src={cardImage.url} width={"200%"} height={"200%"} alt={cardImage.title} />
				</Grid>
				<Grid container item direction="column" xs={12} sm={9} md={7} sx={{ pl: { xs: "0em", sm: "2em" } }}>
					<Grid item xs md={1} sx={{ height: "100%", width: "100%", pb: "0.5em", pr: "1em" }}>
						<Link href={`/blog/${slug}`} passHref>
							<Typography variant="h4" sx={{ fontWeight: 600, textAlign: "left", cursor: "pointer" }}>
								{title}
							</Typography>
						</Link>
					</Grid>
					<Grid
						item
						xs
						md={1}
						sx={{
							height: "100%",
							width: "100%",
							pb: { xs: "0.5em", md: "0em" },
							pr: { xs: "0em", md: "1.5em" }
						}}
					>
						<Typography variant="h6" sx={{ fontWeight: 100 }}>
							{summary}
						</Typography>
					</Grid>
					<Grid
						item
						xs
						md={0}
						sx={{
							[theme.breakpoints.up("xs")]: { height: "100%", width: "100%" },
							[theme.breakpoints.up("md")]: { display: "none" },
							textAlign: "right"
						}}
					>
						<Link href={`/blog/${slug}`} passHref>
							<Button variant="contained" sx={{ minHeight: "3em", textAlign: "center" }}>
								Read more...
							</Button>
						</Link>
					</Grid>
				</Grid>
				<Grid
					container
					item
					direction="column"
					xs={0}
					md={2}
					sx={{
						[theme.breakpoints.down("md")]: { display: "none" },
						[theme.breakpoints.up("md")]: { display: "flex" },
						pl: "1em"
					}}
				>
					<AuthorImageWithName {...author} />
					<Grid item md sx={{ display: "flex", alignItems: "flex-end", pt: "1em" }}>
						<Link href={`/blog/${slug}`} passHref>
							<Button
								variant="contained"
								sx={{ minWidth: "100%", minHeight: "3.5em", textAlign: "center" }}
							>
								Read more...
							</Button>
						</Link>
					</Grid>
				</Grid>
			</Grid>
		</Paper>
	)
}
