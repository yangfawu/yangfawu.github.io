import Section from "../../components/section"

interface Props {
    id: number
}
export default function Projects({ id }: Props) {
    return (
        <Section id={id} title="Projects" background="bg-slate-300">
            <div id="projects"></div>
            <div className="space-y-8">
                
            </div>
        </Section>
    )
}
