import NavBar from "../components/NavBar"
import PageBlock from "../components/PageBlock"
import HomeContent from "../components/HomeContent"
import FooterNavBar from "../components/FooterNavBar"

const HomePage = () => {
    return (
        <section id="home">
            <PageBlock />
            <NavBar />
            <HomeContent />
            <FooterNavBar />
        </section>
    )
}

export default HomePage