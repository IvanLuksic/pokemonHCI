/* eslint-disable jsx-a11y/alt-text */
import { Grid } from "@mui/material"
import Image from "next/image"
import loader from "./remoteImageLoader"

export const ResponsiveImage = (props) => {
	return (
		<Grid
			container
			direction="column"
			item
			xs
			sx={{
				width: "70%",
				aspectRatio: "2",
				position: "relative",
				mt: "1em",
				mb: "2em"
			}}
		>
			<Image loader={loader} layout="fill" objectFit="contain" {...props} />
		</Grid>
	)
}
