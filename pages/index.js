import { Grid } from "@mui/material"
import ContentContainer from "../components/contentContainer"
import HeroImage from "../modules/common/heroImage"
import BuyPreview from "../modules/home/buyPreview"
import PokedexPreview from "../modules/home/pokedexPreview"
import DataSourceAPI from "../lib/DataSourceApi"

export default function Home({ image }) {
	return (
		<div className="container">
			<HeroImage {...image} sxContainer={{ height: "500px", mt: { md: "4.5em", sm: "4em", xs: "3.5em" } }} />
			<ContentContainer sxPaper={{ mt: 0 }}>
				<Grid container direction="row" justifyContent="center" alignItems="center">
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

	return {
		props: {
			image
		}
	}
}
