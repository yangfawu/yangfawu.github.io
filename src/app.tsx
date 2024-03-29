import Header from "@components/header"
import ImageViewerProvider from "@providers/image-viewer-provider"
import AboutMe from "./sections/about-me"
import Footer from "./sections/footer"
import Projects from "./sections/projects"
import Recipe from "./sections/recipe"
import Tools from "./sections/tools"

function generator() {
    let id = 1
    return () => id++
}

export default function App() {
    const idGen = generator()

    return (
        <ImageViewerProvider>
            <Header />
            <div className="h-2 sm:h-36" />
            <AboutMe id={idGen()} />
            <Projects id={idGen()} />
            <div className="hidden sm:block h-8 bg-slate-300" />
            <Tools id={idGen()} />
            {/* <div className="h-64" /> */}
            {/* <PlaceHolder id={id()} /> */}
            <div className="hidden sm:block h-8 bg-slate-100/70" />
            <Footer id={idGen()} />
            <Recipe />
        </ImageViewerProvider>
    )
}
