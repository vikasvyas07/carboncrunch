import HeroSection from "./Componets/HeroSection";
import Navbar from "./Componets/Navbar";
import StatsOverlay from "./Componets/StatsOverlay";


const App = () => {
  return (
    <div>
      <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('/Abstract Backgroung.png')" }}>
        <Navbar />
        <HeroSection />
      </div>
      <div className="">

      <StatsOverlay />
      </div>
    </div>
  );
};

export default App;


