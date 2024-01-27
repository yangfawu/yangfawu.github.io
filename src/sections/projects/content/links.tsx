import { LinkIcon } from "@heroicons/react/24/outline"
import { Fade } from "react-awesome-reveal"
import { ProjectLink, ProjectLinkType } from "../data"
import Column from "./column"

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
                <Fade triggerOnce cascade damping={0.4}>
                    {data.map(({ name, type, url }) => (
                        <p key={url}>
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
                        </p>
                    ))}
                </Fade>
            </div>
        </Column>
    )
}
