import Column from "../column"
import Item from "./item"

interface Props {
    data: string[]
    isComplete?: boolean
}
export default function Tags({ data, isComplete }: Props) {
    return (
        <Column title="Tags">
            <div className="flex flex-wrap items-start gap-2">
                {!isComplete && <Item highlight>In Progress</Item>}
                {data.map(tag => (
                    <Item key={tag}>{tag}</Item>
                ))}
            </div>
        </Column>
    )
}
