import { Grid } from "@mui/material"
import ContentContainer from "../components/contentContainer"
import HeroImage from "../modules/common/heroImage"
import BuyPreview from "../modules/home/buyPreview"
import PokedexPreview from "../modules/home/pokedexPreview"
import DataSourceAPI from "../lib/DataSourceApi"
import BlogCard from "../modules/blog/blogCard"

export default function Home({ image, post }) {
	return (
		<div className="container">
			<Grid container id="back-to-top-anchor">
				<HeroImage
					{...image}
					sxContainer={{
						height: { xs: "200px", sm: "300px", md: "500px" },
						top: { md: "4.5em", sm: "4em", xs: "3.5em" }
					}}
				/>
			</Grid>
			<ContentContainer sxPaper={{ mt: 0 }}>
				<Grid container direction="row" justifyContent="center" alignItems="center">
					<Grid item xs={11} zIndex={1}>
						<BlogCard {...post} />
					</Grid>
					<Grid item xs={11}>
						<PokedexPreview />
					</Grid>
					<Grid item xs={11}>
						<BuyPreview />
					</Grid>
				</Grid>
			</ContentContainer>
		</div>
	)
}

export async function getStaticProps() {
	const image = await DataSourceAPI.getHomeHero()
	const posts = await DataSourceAPI.getPosts()
	const post = posts[0]
	return {
		props: {
			image,
			post
		}
	}
}
