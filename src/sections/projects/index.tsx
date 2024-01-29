import Navigator from "@components/navigator"
import Section from "@components/section"
import NavigationProvider from "@providers/navigation-provider"
import { useRef } from "react"
import Content from "./content"
import DATA from "./data"

interface Props {
    id: number
}
export default function Projects({ id }: Props) {
    const ref = useRef<any>(null)

    return (
        <Section
            id={id}
            anchor="projects"
            title="/projects"
            background="bg-slate-900"
            color="text-slate-100"
        >
            <div className="space-y-8" ref={ref}>
                <NavigationProvider
                    targetRef={ref}
                    data={DATA}
                    duration={20}
                    skewness={0.7}
                >
                    <div className="flex gap-4 flex-col sm:flex-row sm:justify-between sm:items-baseline">
                        <h1 className="text-5xl font-bold">Projects</h1>
                        <Navigator />
                    </div>
                    <Content />
                    <Navigator />
                </NavigationProvider>
            </div>
        </Section>
    )
}
