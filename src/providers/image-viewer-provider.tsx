import ClickBoundary from "@components/click-boundary"
import { ReactNode, createContext, useState } from "react"
import { Fade } from "react-awesome-reveal"

interface ContextProps {
    spotlight: (src: any) => void
}
export const ImageViewerContext = createContext<ContextProps>(null as any)

interface Props {
    children?: ReactNode
}
export default function ImageViewerProvider({ children }: Props) {
    const [src, spotlight] = useState<any>(null)

    function close() {
        spotlight(null)
    }

    return (
        <>
            <ImageViewerContext.Provider value={{ spotlight }}>
                {children}
            </ImageViewerContext.Provider>
            {src && (
                <Fade
                    className="fixed top-0 left-0 w-screen h-screen bg-slate-800/75"
                    duration={300}
                >
                    <div
                        className="w-full h-full py-24 box-border flex items-center justify-center"
                        onClick={close}
                    >
                        <ClickBoundary>
                            <img
                                src={src}
                                className="w-auto max-h-full object-contain bg-slate-700/75"
                            />
                        </ClickBoundary>
                        <p className="animate-pulse text-white font-bold font-mono absolute left-1/2 -translate-x-1/2 bottom-12 translate-y-1/2">
                            click anywhere to exit
                        </p>
                    </div>
                </Fade>
            )}
        </>
    )
}
