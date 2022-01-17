import { Grid, useTheme } from "@mui/material"
import Link from "next/link"
import React, { useState, useEffect } from "react"
import BlogCard from "../modules/blog/blogCard"

export default function BlogCardList({ posts }) {
	const theme = useTheme()

	const [windowWidth, setWindowWidth] = useState(undefined)

	useEffect(() => {
		// only execute all the code below in client side
		if (typeof window !== "undefined") {
			// Handler to call on window resize
			function handleResize() {
				// Set window width/height to state
				setWindowWidth(window.innerWidth)
			}

			// Add event listener
			window.addEventListener("resize", handleResize)

			// Call handler right away so state gets updated with initial window size
			handleResize()

			// Remove event listener on cleanup
			return () => window.removeEventListener("resize", handleResize)
		}
	}, [])

	return (
		<Grid
			container
			direction="column"
			justifyContent="center"
			alignItems="center"
			sx={{ width: "100%", mt: "2em", mb: "2em" }}
		>
			{posts.map((blogCard) =>
				windowWidth > theme.breakpoints.values.sm ? (
					<Grid item xs={12} key={blogCard.sys.id} sx={{ mb: { xs: "1em", md: "2em" } }}>
						<BlogCard {...blogCard} />
					</Grid>
				) : (
					<Link href={`/blog/${blogCard.slug}`} key={blogCard.sys.id} passHref>
						<Grid item xs={12} sx={{ mb: { xs: "1em", md: "2em" }, cursor: "pointer" }}>
							<BlogCard {...blogCard} />
						</Grid>
					</Link>
				)
			)}
		</Grid>
	)
}
