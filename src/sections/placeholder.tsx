import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline"
import ExternalLink from "@components/external-link"
import Section from "@components/section"

interface Props {
    id: number
}
export default function PlaceHolder({ id }: Props) {
    return (
        <Section
            id={id}
            anchor="placeholder"
            title="/coming-soon"
            background="bg-slate-900"
            color="text-slate-100"
        >
            <div className="space-y-6">
                <h1 className="text-4xl font-bold">Hey there!</h1>
                <p className="font-mono max-w-md">
                    The site is currently in the progress of being rebuilt. I am
                    trying to adopt{" "}
                    <ExternalLink href="https://tailwindcss.com/">
                        Tailwind
                    </ExternalLink>{" "}
                    into more of my frontend projects. I may also consider
                    sprinkling in some small{" "}
                    <ExternalLink href="https://threejs.org/">
                        Three.js
                    </ExternalLink>{" "}
                    details. In the meantime, feel free to check out my projects
                    on GitHub.
                </p>
                <div className="flex">
                    <a
                        className="border-2 border-slate-100 text-black font-mono py-2 px-4 transition duration-300 bg-slate-100 hover:bg-slate-300 hover:border-slate-300 hover:text-red-600 flex items-center gap-3"
                        href="https://github.com/yangfawu"
                        target="_blank"
                    >
                        <span>Visit My GitHub</span>
                        <ArrowTopRightOnSquareIcon className="h-4" />
                    </a>
                </div>
            </div>
            <div className="h-32" />
        </Section>
    )
}
