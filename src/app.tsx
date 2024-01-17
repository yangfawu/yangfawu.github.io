import Header from "./components/header"
import Section from "./components/section"
import Footer from "./sections/footer"
import Recipe from "./sections/recipe"

export default function App() {
    const id = idGen()

    return (
        <>
            <Header />
            <Section id={id()} title="Header">
                <h1>Hey World</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores tempora deleniti debitis iure facere laudantium
                    odio aliquid culpa est amet.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores tempora deleniti debitis iure facere laudantium
                    odio aliquid culpa est amet.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores tempora deleniti debitis iure facere laudantium
                    odio aliquid culpa est amet.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores tempora deleniti debitis iure facere laudantium
                    odio aliquid culpa est amet.
                </p>
            </Section>
            <Section id={id()} title="Hello">
                <h1>Hey World</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores tempora deleniti debitis iure facere laudantium
                    odio aliquid culpa est amet.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores tempora deleniti debitis iure facere laudantium
                    odio aliquid culpa est amet.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores tempora deleniti debitis iure facere laudantium
                    odio aliquid culpa est amet.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores tempora deleniti debitis iure facere laudantium
                    odio aliquid culpa est amet.
                </p>
            </Section>
            <Section id={id()} title="World">
                <h1>Hey World</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores tempora deleniti debitis iure facere laudantium
                    odio aliquid culpa est amet.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores tempora deleniti debitis iure facere laudantium
                    odio aliquid culpa est amet.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores tempora deleniti debitis iure facere laudantium
                    odio aliquid culpa est amet.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores tempora deleniti debitis iure facere laudantium
                    odio aliquid culpa est amet.
                </p>
            </Section>
            <Section id={id()} title="People">
                <h1>Hey World</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores tempora deleniti debitis iure facere laudantium
                    odio aliquid culpa est amet.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores tempora deleniti debitis iure facere laudantium
                    odio aliquid culpa est amet.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores tempora deleniti debitis iure facere laudantium
                    odio aliquid culpa est amet.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores tempora deleniti debitis iure facere laudantium
                    odio aliquid culpa est amet.
                </p>
            </Section>
            <div className="h-8 bg-slate-300" />
            <Footer id={id()} />
            <Recipe />
        </>
    )
}

function idGen() {
    let id = 1
    return () => id++
}
