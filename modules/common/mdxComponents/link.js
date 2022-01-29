import { useTheme } from "@mui/material"
import React from "react"

export const A = (props) => {
	const theme = useTheme()
	return <a style={{ color: theme.palette.primary.main, textDecoration: "underline" }} {...props} />
}
