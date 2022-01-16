import { Button } from "@mui/material"
import Link from "next/link"
import React from "react"

export default function ThemedButton(link) {
	return (
		<Link href={`${link}`}>
			<Button variant="contained" sx={{ textAlign: "center" }}>
				Read more...
			</Button>
		</Link>
	)
}
