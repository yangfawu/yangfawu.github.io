interface Props {
    title: string
}
export default function Section({ title }: Props) {
    return (
        <div className="min-h-screen">
            <h1>{title}</h1>
        </div>
    )
}
