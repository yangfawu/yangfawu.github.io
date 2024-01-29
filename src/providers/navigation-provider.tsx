import {
    ReactNode,
    createContext,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react"

interface ContextProps {
    size: number
    index: number
    auto: boolean
    progress: number
    back: () => void
    next: () => void
    goto: (index: number) => void
    toggle: () => void
}
export const NavigationContext = createContext<ContextProps>(null as any)

interface Props {
    targetRef: ReturnType<typeof useRef<any>>
    data: Array<any>
    duration: number // seconds
    skewness?: number // [0 to 1]
    children?: ReactNode
}
export default function NavigationProvider({
    targetRef,
    data,
    duration,
    skewness = 0,
    children,
}: Props) {
    const [index, setIndex] = useState(() => {
        // skew towards bigger indices
        const skewedRandom = Math.pow(Math.random(), 1 - skewness)

        // obtain a skewed random index
        return Math.floor(skewedRandom * data.length)
    })
    const [onAuto, setAuto] = useState(true)
    const [onScreen, setOnScreen] = useState(false)
    const [progress, setProgress] = useState(0)

    function next() {
        setIndex(prev => {
            const next = prev + 1
            return next < data.length ? next : 0
        })
    }

    function goto(index: number) {
        setIndex(index % data.length)
    }

    function back() {
        setIndex(prev => {
            const next = prev - 1
            return next < 0 ? data.length - 1 : next
        })
    }

    function toggle() {
        setAuto(prev => !prev)
    }

    useEffect(() => {
        if (!targetRef.current) return

        const observer = new IntersectionObserver(
            ([entry]) => setOnScreen(entry.isIntersecting),
            { threshold: 0 },
        )
        observer.observe(targetRef.current)
        return () => observer.disconnect()
    }, [targetRef])

    useEffect(() => {
        setProgress(0)
    }, [index])

    useEffect(() => {
        // we don't want to start the timer if we're not on auto or on screen
        if (!onAuto || !onScreen) return

        const id = window.setInterval(() => setProgress(prev => prev + 1), 1000)
        return () => window.clearInterval(id)
    }, [onAuto, onScreen])

    useEffect(() => {
        if (progress > duration) next()
    }, [progress, duration])

    const cssProgress = useMemo(
        () => Math.round((progress / duration) * 100),
        [progress, duration],
    )

    return (
        <NavigationContext.Provider
            value={{
                size: data.length,
                index,
                auto: onAuto,
                progress: cssProgress,
                back,
                next,
                goto,
                toggle,
            }}
        >
            {children}
        </NavigationContext.Provider>
    )
}
