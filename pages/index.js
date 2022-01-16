import { Grid } from "@mui/material"
import ContentContainer from "../components/contentContainer"
import BuyPreview from "../modules/home/buyPreview"
import PokedexPreview from "../modules/home/pokedexPreview"

export default function Home() {
	return (
		<div className="container">
			<ContentContainer>
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
