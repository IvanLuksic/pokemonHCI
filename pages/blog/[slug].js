import { Grid, Button } from "@mui/material"
import Link from "next/link"
import React from "react"
import ContentContainer from "../../components/contentContainer"
import HeroImage from "../../modules/blog/heroImage"
import TitleHeader from "../../modules/blog/titleHeader"
import { MDXRemote } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"
import remarkUnwrapImages from "remark-unwrap-images"
import DataSourceApi from "../../lib/DataSourceApi"

export default function BlogPost({ post }) {
	return (
		<div className="container">
			<ContentContainer>
				<HeroImage {...post.heroImage} />
				<Grid container direction="row" sx={{ width: "100%", justifyContent: "center" }}>
					<TitleHeader {...post} />
					<Grid item xs={11} direction="column" justifyContent="center" alignItems="center">
						<MDXRemote {...post.content} lazy />
					</Grid>
					<Grid item xs={11} direction="column" justifyContent="center" alignItems="flex-star">
						<Link href={"/blog"} passHref>
							<Button variant="contained" sx={{ textAlign: "center", minWidth: "150px" }}>
								Back
							</Button>
						</Link>
					</Grid>
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
