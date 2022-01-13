import { Grid, Typography } from "@mui/material"
import React from "react"

export default function PageHeading({ heading, subheading, xs, sm, md, sx }) {
	return (
		<Grid
			item
			xs={xs != null ? xs : 12}
			sm={sm != null ? sm : null}
			md={md != null ? md : null}
			sx={{ textAlign: "center", mt: "1em", ...sx }}
			id="back-to-top-anchor"
		>
			<Typography variant="h3" color="primary" sx={{ fontWeight: 700 }}>
				{heading}
			</Typography>
			<Typography variant="h6" sx={{ color: "lightgray", fontWeight: 600 }}>
				{subheading}
			</Typography>
		</Grid>
	)
}
