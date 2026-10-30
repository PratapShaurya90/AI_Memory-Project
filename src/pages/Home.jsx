import Navbar from "../components/Navbar";
import LandingPage from "../section/LandingPage";
import Footer from "../section/Footer";

const Home = () => {
    return (
        <div className="w-full h-auto bg-gradient-to-t from-zinc-950 via-zinc-900 to-black">
            <Navbar />
            <LandingPage />
            <Footer />
        </div>
    )
}

export default Home;
