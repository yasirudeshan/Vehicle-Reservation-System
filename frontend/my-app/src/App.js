import React from 'react';
import Navbar from './components/Navbar';
import VehicleHero from './components/VehicleHero';
import SearchBar from './components/SearchBar';
import VehicleListHeader from './components/VehicleListHeader';
import RentCarAd from './components/RentCarAd';
import Footer from './components/Footer';
import VehicleCard from './components/VehicleCard';


function App() {
  return (
    <div>
      <Navbar />
      <VehicleHero />
      <SearchBar />
      <VehicleListHeader/>
      <VehicleCard/>
      <RentCarAd/>
      <Footer />
      
      
    </div>
  );
}

export default App;
