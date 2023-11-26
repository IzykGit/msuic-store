import { useEffect } from 'react'
import './App.css';
import AOS from 'aos';
import "aos/dist/aos.css";
import LandingPage from './components/landingPage';
import Navbar from './components/navbar';


function App() {

  AOS.init({
    duration: 1000
  })

  useEffect(() => {
    AOS.init()
  }, [])


  return (
    <div className="App">
      <Navbar />
      <LandingPage />
    </div>
  );
}

export default App;
