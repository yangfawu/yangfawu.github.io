import Column from "./column"

interface Props {
    data: string
    note?: string | null
}
export default function Description({ data, note }: Props) {
    return (
        <Column title="Description">
            <div className="font-mono">
                <p>{data}</p>
                {note && (
                    <>
                        <p className="text-sm font-bold text-red-600 pt-8">
                            NOTE
                        </p>
                        <p>{note}</p>
                    </>
                )}
            </div>
        </Column>
    )
}
