import ExternalLink from "../components/external-link"

export default function Recipe() {
    return (
        <footer className="flex p-4 text-sm justify-center">
            <p>
                Site built with{" "}
                <ExternalLink href="https://react.dev/">React</ExternalLink> and{" "}
                <ExternalLink href="https://tailwindcss.com/">
                    Tailwind
                </ExternalLink>
                . Click{" "}
                <ExternalLink href="https://github.com/yangfawu/yangfawu.github.io">
                    here
                </ExternalLink>
                {" "}for the repo!
            </p>
        </footer>
    )
}
