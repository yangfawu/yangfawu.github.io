import Section from "./components/section"

export default function App() {
    return (
        <div className="snap-y snap-mandatory h-screen overflow-y-auto">
            <Section title="Header" />
            <Section title="Hello" />
            <Section title="World" />
            <Section title="People" />
            <Section title="Footer" />
        </div>
    )
}
