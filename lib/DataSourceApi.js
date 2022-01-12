import { GraphQLClient, gql } from 'graphql-request';

const graphQLClient = new GraphQLClient(
  `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}`
);

class DataSourceAPI {
  // --- START Contentful ---
  static queryContentful(query, variables = {}) {
    const requestHeaders = {
      Authorization: `Bearer ${variables?.preview
        ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
        : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
    };

    try {
      return graphQLClient.request(query, variables, requestHeaders);
    } catch (error) {
      console.log(error)
      throw new Error('Could not fetch data from Contentful!');
    }
  }

  static async getPosts({ preview = false } = {}) {
    const query = gql`
          query getPosts($preview: Boolean!) {
            blogPostCollection(preview: $preview, order: date_DESC) {
              postCards: items {
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
              }
            }
          }
        `;

    const variables = { preview };
    const response = await this.queryContentful(query, variables);
    const { postCards } = response?.blogPostCollection;
    return postCards;
  }

  // static async getPost({ slug, preview = false } = {}) {
  //     const query = gql`
  //         query getPost($slug: String!, $preview: Boolean!) {
  //             blogPostCollection(
  //                 preview: $preview
  //                 where: { slug: $slug }
  //                 order: date_DESC
  //             ) {
  //                 posts: items {
  //                     title
  //                     slug
  //                     heroImage {
  //                         url
  //                         title
  //                     }
  //                     date
  //                     author {
  //                         fullName
  //                     }
  //                     content
  //                     tags
  //                 }
  //             }
  //         }
  //     `;

  //     const variables = { slug, preview };
  //     const response = await this.queryContentful(query, variables);
  //     const post = response?.blogPostCollection?.posts?.pop();

  //     return post;
  // }

  // static async getSlugs({ preview = false } = {}) {
  //     const query = gql`
  //         query getSlugs($preview: Boolean!) {
  //             blogPostCollection(preview: $preview) {
  //                 posts: items {
  //                     slug
  //                 }
  //             }
  //         }
  //     `;

  //     const variables = { preview };
  //     const response = await this.queryContentful(query, variables);
  //     const { posts } = response?.blogPostCollection;
  //     const slugs = posts.map((post) => post.slug);

  //     return slugs;
  // }
  // --- END Contentful ---
}

export default DataSourceAPI;
