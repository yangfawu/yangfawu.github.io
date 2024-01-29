import Section from "@components/section"
import { DATA } from "./data"

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
                <div className="flex flex-wrap gap-6">
                    {DATA.map(({ image, meta: { id, name, link } }) => (
                        <div key={id} className="space-y-1 group">
                            <div className="bg-slate-100 p-4 rounded-full group-hover:bg-red-600/50 transition-colors">
                                <img
                                    src={image}
                                    alt={name}
                                    className="w-12 h-12 box-content"
                                />
                            </div>
                            <p className="text-sm font-medium text-center">
                                <a
                                    className="hover:underline hover:text-red-600 underline-offset-2"
                                    href={link}
                                    target="_blank"
                                >
                                    {name}
                                </a>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="hidden sm:block h-16" />
        </Section>
    )
}
