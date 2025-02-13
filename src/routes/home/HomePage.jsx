import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const HomePage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="bg-base-200 flex-1">
                <div className="container px-10 xl:px-0 max-w-6xl mx-auto">
                    Home
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default HomePage;