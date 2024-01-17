import { Disclosure } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

interface Props {
    open: boolean
}
export default function MobileMenu({ open }: Props) {
    return (
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                {open ? (
                    <XMarkIcon className="block h-6 w-6" />
                ) : (
                    <Bars3Icon className="block h-6 w-6" />
                )}
            </Disclosure.Button>
        </div>
    )
}
