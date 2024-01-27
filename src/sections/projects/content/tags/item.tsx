import tw from "tailwind-styled-components"

interface Props {
    highlight?: boolean
    children: string
}
const Item = tw.span<Props>`
    inline-block
    px-3
    py-1
    rounded-full
    text-black
    text-sm
    font-mono
    font-semibold
    ${({ highlight }) => (highlight ? "bg-yellow-300 animate-pulse" : "bg-slate-300")}
`

export default Item
