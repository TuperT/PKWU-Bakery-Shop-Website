import NavBar from "../components/NavBar"
import PageBlock from "../components/PageBlock"
import HomeContent from "../components/HomeContent"

const HomePage = () => {
    return (
        <section id="home">
            <PageBlock />
            <NavBar />
            <HomeContent />
        </section>
    )
}

export default HomePage