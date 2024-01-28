import logo from "@assets/logo.svg"
import ButtonLink from "@components/button-link"
import ExternalLink from "@components/external-link"
import Section from "@components/section"
import {
    EnvelopeIcon,
    GlobeAltIcon,
    LinkIcon,
    PhoneIcon,
} from "@heroicons/react/24/outline"
import Contact from "./contact"

interface Props {
    id: number
}
export default function Footer({ id }: Props) {
    return (
        <Section
            id={id}
            anchor="contact"
            title="Contact Me"
            background="bg-slate-100/70"
        >
            <div className="space-y-8">
                <img
                    className="h-16 w-auto sm:h-20"
                    src={logo}
                    alt="Yangfa Wu"
                />
                <div className="flex gap-12 items-stretch justify-between flex-wrap">
                    <div className="space-y-4">
                        <Contact Icon={EnvelopeIcon}>
                            <ExternalLink href="mailto:yangfa.wu1@gmail.com">
                                yangfa.wu1@gmail.com
                            </ExternalLink>
                        </Contact>
                        <Contact Icon={PhoneIcon}>
                            <ExternalLink href="tel:16467555009">
                                +1 (646) 755-5009
                            </ExternalLink>
                        </Contact>
                        <Contact Icon={LinkIcon}>
                            <ExternalLink href="https://www.linkedin.com/in/yangfa-wu/">
                                in/yangfa-wu
                            </ExternalLink>
                        </Contact>
                        <Contact Icon={GlobeAltIcon}>
                            <ExternalLink href="https://github.com/yangfawu/">
                                gh/yangfawu
                            </ExternalLink>
                        </Contact>
                    </div>
                    <div className="flex items-end">
                        <ButtonLink href="#">Return to Top</ButtonLink>
                    </div>
                </div>
            </div>
            <div className="hidden sm:block h-16" />
        </Section>
    )
}
