import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import RestaurantList from './components/RestaurantList';
import Footer from './components/Footer';
import './styles/variables.css'; // CSS Variables (Fonts should be linked in index.html or imported here/variables.css)
import './styles/App.css';       // Global app styles

function App() {
  const [isVintageMode, setIsVintageMode] = useState(false);

  const toggleVintageMode = () => {
    setIsVintageMode(prevMode => !prevMode);
  };

  // Apply class to body for global vintage styling
  useEffect(() => {
    if (isVintageMode) {
      document.body.classList.add('vintage-mode');
    } else {
      document.body.classList.remove('vintage-mode');
    }
    // Cleanup function to remove class when component unmounts
    return () => document.body.classList.remove('vintage-mode');
  }, [isVintageMode]);


  return (
    <> {/* Using Fragment to avoid unnecessary div, #root handles flex layout */}
      <Header isVintageMode={isVintageMode} onToggleVintage={toggleVintageMode} />
      <main className="app-container">
        <Hero />
        <RestaurantList />
      </main>
      <Footer />
    </>
  );
}

export default App;
