import Section from "@components/section"
import Column from "./column"
import { DATABASES, FRAMEWORKS, LANGUAGES } from "./data"

interface Props {
    id: number
}
export default function Tools({ id }: Props) {
    return (
        <Section id={id} title="Tools" anchor="tools" background="bg-slate-300">
            <div className="space-y-8">
                <h1 className="text-5xl font-bold">Tools</h1>
                <div className="flex items-stretch flex-wrap gap-x-6 gap-y-8">
                    <Column title="Languages" data={LANGUAGES} />
                    <Column title="Frameworks" data={FRAMEWORKS} />
                    <Column title="Databases" data={DATABASES} />
                </div>
            </div>
            {/* <Additional /> */}
            <div className="hidden sm:block h-16" />
        </Section>
    )
}
