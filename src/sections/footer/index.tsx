import Section from "../../components/section"
import logo from "../../assets/logo.svg"
import { EnvelopeIcon, GlobeAltIcon, PhoneIcon } from "@heroicons/react/24/outline"
import ExternalLink from "../../components/external-link"
import Contact from "./contact"
import ButtonLink from "../../components/button-link"

interface Props {
    id: number
}
export default function Footer({ id }: Props) {
    return (
        <Section id={id} title="Contact Me" background="bg-slate-300">
            <div id="contact"></div>
            <div className="space-y-8">
                <img className="h-16 w-auto sm:h-20" src={logo} alt="Yangfa Wu" />
                <div className="flex gap-12 items-stretch justify-between flex-wrap">
                    <div className="space-y-4">
                        <Contact Icon={EnvelopeIcon}>
                            <ExternalLink href="mailto:yangfa.wu1@gmail.com">yangfa.wu1@gmail.com</ExternalLink>
                        </Contact>
                        <Contact Icon={PhoneIcon}>
                            <ExternalLink href="tel:16467555009">+1 (646) 755-5009</ExternalLink>
                        </Contact>
                        <Contact Icon={GlobeAltIcon}>
                            <ExternalLink href="https://github.com/yangfawu/">GitHub @yangfawu</ExternalLink>
                        </Contact>
                    </div>
                    <div className="flex items-end">
                        <ButtonLink href="#">Return to Top</ButtonLink>
                    </div>
                </div>
            </div>
            <div className="h-16" />
        </Section>
    )
}
