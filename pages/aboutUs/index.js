import { Grid } from "@mui/material"
import React from "react"
import AuthorsSection from "../../components/authorsSection"
import ContentContainer from "../../components/contentContainer"
import PageHeading from "../../components/pageHeading"
import MdSection from "../../components/mdSection"
import { serialize } from "next-mdx-remote/serialize"
import remarkUnwrapImages from "remark-unwrap-images"
import DataSourceApi from "../../lib/DataSourceApi"

export default function AboutUs({ sections }) {
	return (
		<div className="container">
			<ContentContainer>
				<Grid container direction="row" justifyContent="center" alignItems="center" sx={{ width: "100%" }}>
					<PageHeading heading="About us" xs={10} sx={{ textAlign: "left" }} />
					<Grid item xs={10} sx={{ pb: "4em" }}>
						{sections.map((section) =>
							section.authors != undefined ? (
								<AuthorsSection {...section} />
							) : section.content != undefined ? (
								<MdSection key={section.sys.id} {...section} />
							) : null
						)}
					</Grid>
				</Grid>
			</ContentContainer>
		</div>
	)
}

export async function getStaticProps() {
	let sections = await DataSourceApi.getAboutUs()

	sections = await Promise.all(
		sections.map(async (value) => {
			if (value.content != undefined) {
				value.content = await serialize(value.content, {
					mdxOptions: { remarkPlugins: [remarkUnwrapImages] }
				})
			}
			return await value
		})
	)

	return {
		props: {
			sections
		}
	}
}
