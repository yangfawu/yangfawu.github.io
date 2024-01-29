import Navigator from "@components/navigator"
import Section from "@components/section"
import NavigationProvider from "@providers/navigation-provider"
import Content from "./content"
import DATA from "./data"

interface Props {
    id: number
}
export default function Projects({ id }: Props) {
    return (
        <Section
            id={id}
            anchor="projects"
            title="/projects"
            background="bg-slate-900"
            color="text-slate-100"
        >
            <NavigationProvider data={DATA} duration={20} skewness={0.7}>
                <div className="space-y-8">
                    <div className="flex gap-4 flex-col sm:flex-row sm:justify-between sm:items-baseline">
                        <h1 className="text-5xl font-bold">Projects</h1>
                        <Navigator />
                    </div>
                    <Content />
                    <Navigator />
                </div>
            </NavigationProvider>
        </Section>
    )
}
