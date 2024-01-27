import { Fade } from "react-awesome-reveal"
import Column from "./column"

interface Props {
    prefix: string | number
    data: string
    note?: string | null
}
export default function Description({ prefix, data, note }: Props) {
    return (
        <Column title="Description">
            <div className="font-mono">
                <Fade key={prefix} cascade triggerOnce damping={0.3}>
                    <p>{data}</p>
                    {note && (
                        <>
                            <p className="text-sm font-bold text-red-600 pt-8">
                                NOTE
                            </p>
                            <p>{note}</p>
                        </>
                    )}
                </Fade>
            </div>
        </Column>
    )
}
