import { Fade } from "react-awesome-reveal"
import Column from "../column"
import Item from "./item"

interface Props {
    prefix: string | number
    data: string[]
    isComplete?: boolean
}
export default function Tags({ prefix, data, isComplete }: Props) {
    return (
        <Column title="Tags">
            <div key={prefix} className="flex flex-wrap items-start gap-2">
                <Fade triggerOnce cascade damping={0.1}>
                    {!isComplete && <Item highlight>In Progress</Item>}
                    {data.map(tag => (
                        <Item key={tag}>{tag}</Item>
                    ))}
                </Fade>
            </div>
        </Column>
    )
}
