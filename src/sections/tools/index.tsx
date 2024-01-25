import Section from "../../components/section"

interface Props {
    id: number
}
export default function Tools({ id }: Props) {
    return (
        <Section id={id} title="Tools" background="bg-slate-300">
            <div id="tools"></div>
            <div className="space-y-8">
                
            </div>
        </Section>
    )
}
