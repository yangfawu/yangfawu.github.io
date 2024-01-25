import Header from "./components/header"
import AboutMe from "./sections/about-me"
import Footer from "./sections/footer"
import PlaceHolder from "./sections/placeholder"
import Projects from "./sections/projects"
import Recipe from "./sections/recipe"
import Tools from "./sections/tools"

export default function App() {
    const id = idGen()

    return (
        <>
            <Header />
            <div className="h-2 sm:h-36" />
            <AboutMe id={id()} />
            <Projects id={id()} />
            <Tools id={id()} />
            <PlaceHolder id={id()} />
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
