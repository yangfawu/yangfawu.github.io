import { Link } from "./types"

interface Props {
    data: Link[]
}
export default function DesktopLinks({ data }: Props) {
    return (
        <div className="hidden sm:ml-6 sm:flex items-center">
            <div className="flex space-x-4">
                {data.map(({ name, href }) => (
                    <a
                        key={name}
                        href={href}
                        className="font-mono text-black hover:underline hover:underline-offset-2 hover:font-medium px-3 py-2 text-lg font-normal"
                    >
                        {name}
                    </a>
                ))}
            </div>
        </div>
    )
}
