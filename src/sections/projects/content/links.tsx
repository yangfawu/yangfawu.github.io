import { LinkIcon } from "@heroicons/react/24/outline"
import Column from "./column"
import { ProjectLink, ProjectLinkType } from "../data"

const TYPE_TO_NAME: Record<ProjectLinkType, string> = {
    [ProjectLinkType.GITHUB]: "GitHub Repository",
    [ProjectLinkType.DEPLOYMENT]: "Deployed Application",
    [ProjectLinkType.OTHER]: "Project Link",
}

interface Props {
    data: ProjectLink[]
}
export default function Links({ data }: Props) {
    return (
        <Column title="Links">
            <div className="space-y-2">
                {data.map(({ name, type, url }) => (
                    <div key={url}>
                        <a
                            href={url}
                            target="_blank"
                            className="flex items-center gap-2 group"
                        >
                            <LinkIcon className="w-4" />
                            <span className="font-mono group-hover:underline group-hover:underline-offset-2 group-hover:text-red-600 transition-all">
                                {name || TYPE_TO_NAME[type]}
                            </span>
                        </a>
                    </div>
                ))}
            </div>
        </Column>
    )
}
