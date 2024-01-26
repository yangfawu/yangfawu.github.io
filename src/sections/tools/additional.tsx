import { useState } from "react"

export default function Additional() {
    const [isOpen, setOpen] = useState(false)

    function reveal() {
        setOpen(true)
    }

    if (!isOpen) {
        return (
            <div className="py-16">
                <p className="text-center">
                    <button
                        className="underline underline-offset-2 hover:text-red-600"
                        onClick={reveal}
                    >
                        show more
                    </button>
                </p>
            </div>
        )
    }

    return (
        <div className="py-16">
            <p>more stuff</p>
        </div>
    )
}
