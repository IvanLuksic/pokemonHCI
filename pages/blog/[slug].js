import { Grid, Button } from "@mui/material"
import Link from "next/link"
import React from "react"
import ContentContainer from "../../components/contentContainer"
import HeroImage from "../../modules/blog/heroImage"
import TitleHeader from "../../modules/blog/titleHeader"
import SimilarContentSection from "../../modules/blog/similarContentSection"
import { MDXRemote } from "next-mdx-remote"
import components from "../../modules/common/mdxComponents/index"
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
					<Grid item xs={11} justifyContent="center" alignItems="center" sx={{ pb: "3em" }}>
						<MDXRemote {...post.content} components={components} lazy />
					</Grid>
					{post.similarContent.length != 0 ? (
						<SimilarContentSection similarContent={post.similarContent} />
					) : null}
					<Grid item xs={11} justifyContent="center" alignItems="flex-star">
						<Link href={"/blog"} passHref>
							<Button
								variant="contained"
								sx={{ textAlign: "center", minWidth: "150px", minHeight: "50px" }}
							>
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

	post.similarContent = post.similarContentCollection.items

	delete post.similarContentCollection.items

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
