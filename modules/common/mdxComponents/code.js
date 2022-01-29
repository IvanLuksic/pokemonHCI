import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { materialLight as style } from "react-syntax-highlighter/dist/cjs/styles/prism"

export const Pre = (props) => <pre {...props} />

export const Code = (props) => {
	const match = /language-(\w+)/.exec(props.className || "")
	return match ? (
		<SyntaxHighlighter style={style} language={match[1]} showLineNumbers={true} PreTag="div" {...props}>
			{String(props.children).replace(/\n$/, "")}
		</SyntaxHighlighter>
	) : (
		<code>{props.children}</code>
	)
}
