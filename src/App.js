import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import NavBar from "./components/Navbar/NavBar";
import Intro from "./components/Intro/Intro";
import SuccessStoryCard from "./components/SuccessStory/SuccessStoryCard";
import AreaOfPractise from "./components/AreaOfPractise/AreaOfPractise";
import ClientCard from "./components/ClientCard/ClientCard";
import TeamCards from "./components/OurTeam/TeamCards";
import Faq from "./components/Faq/Faq";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <hr />
        <HeroSection />
        <hr />
        <Intro />
        <hr />
        <SuccessStoryCard />
        <hr />
        <AreaOfPractise />
        <hr />
        <ClientCard />
        <hr />
        <TeamCards />
        <hr />
        <Faq />
        <hr />
        <Subscribe />
        <hr />
        <Footer />
      </header>
    </div>
  );
}

export default App;
