import { MouseEvent } from "react"
import tw from "tailwind-styled-components"

function trap(event: MouseEvent<HTMLDivElement>) {
    event.stopPropagation()
}

const ClickBoundary = tw.div`contents`
ClickBoundary.defaultProps = {
    onClick: trap,
}

export default ClickBoundary
