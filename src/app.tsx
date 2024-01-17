import Header from "./components/header"
import AboutMe from "./sections/about-me"
import Footer from "./sections/footer"
import PlaceHolder from "./sections/placeholder"
import Recipe from "./sections/recipe"

export default function App() {
    const id = idGen()

    return (
        <>
            <Header />
            <div className="h-36" />
            <AboutMe id={id()} />
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
