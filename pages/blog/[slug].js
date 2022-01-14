import { Grid } from "@mui/material"
import React, { useState } from "react"
import ContentContainer from "../../components/contentContainer"
import { serialize } from "next-mdx-remote/serialize"
import remarkUnwrapImages from "remark-unwrap-images"
import DataSourceApi from "../../lib/DataSourceApi"

export default function BlogPost({ post }) {
	return (
		<div className="container">
			<ContentContainer>
				<Grid container direction="row" justifyContent="center" alignItems="center" sx={{ width: "100%" }}>
					{/* <Grid item xs={11}> */}
					{/* {content on page} */}
					<p>{JSON.stringify(post)}</p>
					{/* </Grid> */}
				</Grid>
			</ContentContainer>
		</div>
	)
}

export async function getStaticProps({ params }) {
	const post = await DataSourceApi.getPost({ slug: params.slug })

	post.content = await serialize(post.content, {
		mdxOptions: { remarkPlugins: [remarkUnwrapImages] }
	})

	return {
		props: {
			post
		}
	}
}

export async function getStaticPaths() {
	const slugs = await DataSourceApi.getSlugs()

	const paths = slugs.map((slug) => ({
		params: {
			slug
		}
	}))

	return {
		paths,
		fallback: false
	}
}
