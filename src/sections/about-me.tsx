import ButtonLink from "../components/button-link"
import Section from "../components/section"
import UnderlineSpan from "../components/underline-span"

interface Props {
    id: number
}
export default function AboutMe({ id }: Props) {
    return (
        <Section id={id} title="About Me">
            <div id="about" />
            <div className="space-y-6">
                <h1 className="text-4xl font-bold">Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r to-red-800 from-red-600">Yangfa</span></h1>
                <p className="font-mono max-w-md">
                    I am an aspiring <UnderlineSpan>Software Engineering</UnderlineSpan> student and programmer based in New York. I have a passion in web development, but I am currently delving into the world of <UnderlineSpan>backend development</UnderlineSpan> with a focus on cloud services. Fascinated by cutting-edge technologies, I am also exploring topics like GPT-3 and custom language compilers at the moment.
                </p>
                <p className="font-mono max-w-md">
                    With prior internship <UnderlineSpan>experience</UnderlineSpan> in fullstack development, I can bring a versatile skill set to the table. I am currently <UnderlineSpan>open</UnderlineSpan> to exploring new opporunities and embracing new challenges. Let's connect and discuss how I can bring my passion and skills to your team! 
                </p>
                <div className="flex flex-wrap gap-4">
                    <ButtonLink href="#contact">Contact Me</ButtonLink>
                    <ButtonLink href="#projects">Browse My Projects</ButtonLink>
                </div>
                <div className="h-16" />
            </div>
        </Section>
    )
}
