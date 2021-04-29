import './App.css';
import Footer from './components/Footer/Footer';
import GetInTouch from './components/GetInTouch/GetInTouch';
import Header from './components/Header/header';
import HeroSection from './components/HeroSection/heroSection';
import Projects from './components/Projects/Projects';
import Stack from './components/Stack/Stack';

function App() {
  return (
    <div className="App">
      <div className="landingPage">
        <Header/>
        <HeroSection/>
      </div>
      <div className="projects">
        <Projects />
        <Stack />
        <GetInTouch />
        <Footer />
      </div>
    </div>
  );
}

export default App;
