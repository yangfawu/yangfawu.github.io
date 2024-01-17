import { Disclosure } from "@headlessui/react"
import DesktopLinks from "./desktop-links"
import Logo from "./logo"
import MobileLinks from "./mobile-links"
import MobileMenu from "./mobile-menu"
import { Link } from "./types"

const LINKS: Link[] = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Tools", href: "#tools" },
    { name: "Contact", href: "#contact" },
]

export default function Header() {
    return (
        <Disclosure as="nav">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-24 items-center justify-between">
                            <MobileMenu open={open} />
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                                <Logo />
                                <DesktopLinks data={LINKS} />
                            </div>
                        </div>
                    </div>
                    <MobileLinks data={LINKS} />
                </>
            )}
        </Disclosure>
    )
}
