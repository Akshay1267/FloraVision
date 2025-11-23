import "./App.css";
import CustomerReview from "./components/CustomerReview.jsx";
import Footer from "./components/Footer.jsx";
import HeroBanner from "./components/HeroBanner.jsx";
import Navbar from "./components/Navbar.jsx";
import OurBesto2 from "./components/OurBesto2.jsx";
import PlantCard from "./components/PlantCard.jsx";
import TopSellingPlants from "./components/TopSelling.jsx";
import TrendyPlants from "./components/TrendyPlants.jsx";

function App() {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <PlantCard />
      <TrendyPlants />
      <TopSellingPlants />
      <CustomerReview />
      <OurBesto2 />
      <Footer />
    </>
  );
}

export default App;
