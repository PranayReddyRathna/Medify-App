import './App.css';
import { Routes,Route } from 'react-router-dom';
import TopInfo from './components/TopInfo/TopInfo';
import HeroSection from './components/HeroSection/HeroSection';
import SearchHospital from './components/SearchHospital/SearchHospital';
import BookingSection from './components/BookingSection/BookingSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
       <TopInfo/>
      <Routes>
        <Route  path="/" element={<HeroSection/>}/>
        <Route  path="/search" element={<SearchHospital/>}/>
        <Route path="/booking" element={<BookingSection/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;