interface Props {
    title: string
}
export default function Section({ title }: Props) {
    return (
        <div className="min-h-screen snap-start bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 box-border">
            <h1>{title}</h1>
        </div>
    )
}
