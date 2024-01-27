import tw from "tailwind-styled-components"

const ExternalLink = tw.a`
    underline
    underline-offset-2
    hover:text-red-600
`
ExternalLink.defaultProps = {
    target: "_blank",
    rel: "noopener noreferrer",
}

export default ExternalLink
