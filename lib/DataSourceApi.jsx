import { GraphQLClient, gql } from "graphql-request"

const graphQLClient = new GraphQLClient(
	`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}`
)

class DataSourceAPI {
	// --- START Contentful ---
	static queryContentful(query, variables = {}) {
		const requestHeaders = {
			Authorization: `Bearer ${
				variables?.preview ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN : process.env.CONTENTFUL_ACCESS_TOKEN
			}`
		}

		try {
			return graphQLClient.request(query, variables, requestHeaders)
		} catch (error) {
			console.log(error)
			throw new Error("Could not fetch data from Contentful!")
		}
	}

	static async getPosts({ preview = false } = {}) {
		const query = gql`
			query getPosts($preview: Boolean!) {
				blogPostCollection(preview: $preview, order: date_DESC) {
					posts: items {
						sys {
							id
						}
						title
						summary
						cardImage {
							title
							url
						}
						author {
							nickname
							image {
								title
								url
							}
						}
						slug
					}
				}
			}
		`

		const variables = { preview }
		const response = await this.queryContentful(query, variables)
		const { posts } = response?.blogPostCollection
		return posts
	}

	static async getPost({ slug, preview = false } = {}) {
		const query = gql`
			query getPosts($slug: String!, $preview: Boolean!) {
				blogPostCollection(preview: $preview, where: { slug: $slug }) {
					posts: items {
						sys {
							id
						}
						title
						content
						summary
						heroImage {
							title
							url
						}
						date
						author {
							name
							surname
							nickname
							image {
								title
								url
							}
						}
						slug
					}
				}
			}
		`

		const variables = { slug, preview }
		const response = await this.queryContentful(query, variables)
		const post = response?.blogPostCollection?.posts?.pop()
		return post
	}

	static async getAboutUs({ preview = false } = {}) {
		const query = gql`
			query getSections($preview: Boolean!) {
				authorCollection(preview: $preview) {
					authors: items {
						sys {
							id
						}
						name
						surname
						nickname
						image {
							title
							url
						}
						about
					}
				}
				markdownSectionCollection(preview: $preview) {
					markdownSection: items {
						sys {
							id
						}
						title
						content
					}
				}
			}
		`

		const variables = { preview }
		const response = await this.queryContentful(query, variables)
		const authors = response?.authorCollection
		const { markdownSection } = response?.markdownSectionCollection

		return [authors, ...markdownSection]
	}

	static async getSlugs({ preview = false } = {}) {
		const query = gql`
			query getSlugs($preview: Boolean!) {
				blogPostCollection(preview: $preview) {
					posts: items {
						slug
					}
				}
			}
		`

		const variables = { preview }
		const response = await this.queryContentful(query, variables)
		const { posts } = response?.blogPostCollection
		const slugs = posts.map((post) => post.slug)

		return slugs
	}
	// --- END Contentful ---
}

export default DataSourceAPI
