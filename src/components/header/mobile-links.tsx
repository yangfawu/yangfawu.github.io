import { Disclosure } from "@headlessui/react"
import { Link } from "./types"

interface Props {
    data: Link[]
}
export default function MobileLinks({ data }: Props) {
    return (
        // default hidden until screen hits [sm]
        <Disclosure.Panel className="sm:hidden">
            <div className="border-t-2 border-gray-700 pb-2">
                {data.map(({ name, href }) => (
                    <Disclosure.Button
                        key={name}
                        as="a"
                        href={href}
                        className="text-black border-b-2 border-gray-700 hover:bg-gray-700 hover:text-white block px-5 py-3 text-base font-normal font-mono"
                    >
                        {name}
                    </Disclosure.Button>
                ))}
            </div>
        </Disclosure.Panel>
    )
}
