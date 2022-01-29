import { Typography } from "@mui/material"
import React from "react"

export const Ul = (props) => <ul style={{ paddingBottom: "0.5em" }} {...props} />

export const Li = (props) => (
	<li>
		<Typography variant="h6" sx={{ fontWeight: "100", pb: 0 }} {...props} />
	</li>
)
