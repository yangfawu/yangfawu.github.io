import Navigator from "@components/navigator"
import Section from "@components/section"
import NavigationProvider from "@providers/navigation-provider"
import Comments from "./comments"
import { DATA } from "./data"
import Item from "./item"

interface Props {
    id: number
}
export default function Tools({ id }: Props) {
    return (
        <Section
            id={id}
            title="/tools"
            anchor="tools"
            background="bg-slate-300"
        >
            <div className="space-y-8">
                <h1 className="text-5xl font-bold">Tools</h1>
                <NavigationProvider data={DATA} duration={10}>
                    <div className="flex-1 flex flex-wrap gap-6">
                        {DATA.map(({ image, meta }) => (
                            <Item key={id} image={image} meta={meta} />
                        ))}
                    </div>
                    <div className="hidden sm:block h-1" />
                    <Comments />
                    <Navigator dark />
                </NavigationProvider>
            </div>
        </Section>
    )
}
