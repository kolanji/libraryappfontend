import React from 'react';

import './App.css';
import { Navbar } from './Layouts/NavbarAndFootBar/Navbar';
import { ExploreTopBook } from './Layouts/HomePage/components/ExploreTopBook';
import { Carousel } from './Layouts/HomePage/components/Carousel';
import { Heros } from './Layouts/HomePage//components/Heros';

function App() {
  return (
    <div>
    <Navbar />
    <ExploreTopBook/>
    <Carousel/>
    <Heros/>
    </div>
  );
}

export default App;
