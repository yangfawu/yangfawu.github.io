import { LinkIcon } from "@heroicons/react/24/outline"
import { useEffect, useMemo, useState } from "react"
import Section from "../../components/section"
import Column from "./column"
import { PROJECT_DURATION } from "./config"
import DATA, { ProjectLinkType } from "./data"
import Gallery from "./gallery"
import Navigator from "./navigator"
import Tag from "./tag"

interface Props {
    id: number
}
export default function Projects({ id }: Props) {
    const [index, setIndex] = useState(Math.floor(Math.random() * DATA.length))

    function cycleNext() {
        setIndex(prev => {
            const next = prev + 1
            return next < DATA.length ? next : 0
        })
    }

    function cycleBack() {
        setIndex(prev => {
            const next = prev - 1
            return next < 0 ? DATA.length - 1 : next
        })
    }

    const [onAuto, setAuto] = useState(true)
    const [progress, setProgress] = useState(0)

    function toggleAuto() {
        setAuto(prev => !prev)
    }

    useEffect(() => {
        setProgress(0)
    }, [index])

    useEffect(() => {
        if (!onAuto) return
        const id = window.setInterval(() => setProgress(prev => prev + 1), 1000)
        return () => window.clearInterval(id)
    }, [onAuto])

    useEffect(() => {
        if (progress > PROJECT_DURATION) cycleNext()
    }, [progress])

    const cssProgress = useMemo(
        () => Math.round((progress / PROJECT_DURATION) * 100),
        [progress],
    )

    return (
        <Section
            id={id}
            title="Projects"
            background="bg-slate-900"
            color="text-slate-100"
        >
            <div id="projects"></div>
            <div className="space-y-8">
                <div className="flex gap-4 flex-col sm:flex-row sm:justify-between sm:items-baseline">
                    <h1 className="text-5xl font-bold">Projects</h1>
                    <Navigator
                        size={DATA.length}
                        index={index}
                        auto={onAuto}
                        progress={cssProgress}
                        back={cycleBack}
                        next={cycleNext}
                        toggle={toggleAuto}
                    />
                </div>
                <div className="space-y-2">
                    <p className="text-sm font-bold text-red-600 uppercase">
                        currently viewing
                    </p>
                    {/* <TextTransition className="text-3xl">
                        {DATA[index].title}
                    </TextTransition> */}
                    <p className="text-3xl">{DATA[index].title}</p>
                </div>
                <Gallery sources={DATA[index].images} />
                <div>
                    <Column title="Tags">
                        <div className="flex flex-wrap items-start gap-2">
                            {!DATA[index].isComplete && (
                                <Tag highlight>In Progress</Tag>
                            )}
                            {DATA[index].tags.map(tag => (
                                <Tag key={tag}>{tag}</Tag>
                            ))}
                        </div>
                    </Column>
                </div>
                <div className="flex flex-wrap gap-8 items-start">
                    <Column title="Description">
                        <div className="font-mono">
                            <p>{DATA[index].description}</p>
                            {DATA[index].note && (
                                <>
                                    <p className="text-sm font-bold text-red-600 pt-8">
                                        NOTE
                                    </p>
                                    <p>{DATA[index].note}</p>
                                </>
                            )}
                        </div>
                    </Column>
                    <Column title="Links">
                        <div className="space-y-2">
                            {DATA[index].links.map(({ name, type, url }) => (
                                <div key={url}>
                                    <a
                                        href={url}
                                        target="_blank"
                                        className="flex items-center gap-2 group"
                                    >
                                        <LinkIcon className="w-4" />
                                        <span className="font-mono group-hover:underline group-hover:underline-offset-2 group-hover:text-red-600 transition-all">
                                            {name ||
                                                (type === ProjectLinkType.GITHUB
                                                    ? "GitHub Repository"
                                                    : type ==
                                                        ProjectLinkType.DEPLOYMENT
                                                      ? "Deployed Application"
                                                      : "Project Link")}
                                        </span>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </Column>
                </div>
                <Navigator
                    size={DATA.length}
                    index={index}
                    auto={onAuto}
                    progress={cssProgress}
                    back={cycleBack}
                    next={cycleNext}
                    toggle={toggleAuto}
                />
            </div>
        </Section>
    )
}
