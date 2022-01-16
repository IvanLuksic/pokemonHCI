import { P } from "./text"
import { H4, H5, H6, H7, H8, H9 } from "./heading"
import { Ul, Li } from "./list"
import { ResponsiveImage } from "./image"
import { Quote } from "./quote"
import { A } from "./link"
import { Code, Pre } from "./code"

export default {
	p: P,
	h1: H4,
	h2: H5,
	h3: H6,
	h4: H7,
	h5: H8,
	h6: H9,
	ul: Ul,
	li: Li,
	img: ResponsiveImage,
	blockquote: Quote,
	a: A,
	pre: Pre,
	code: Code
}
