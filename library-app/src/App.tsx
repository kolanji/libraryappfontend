import React from 'react';

import './App.css';
import { Navbar } from './Layouts/NavbarAndFootBar/Navbar';
import { ExploreTopBook } from './Layouts/HomePage/components/ExploreTopBook';
import { Carousel } from './Layouts/HomePage/components/Carousel';
import { Heros } from './Layouts/HomePage//components/Heros';
import { HomePage } from './Layouts/HomePage/HomePage';
import { SearchBook } from './SearchBookPage/components/SearchBook';
import { SearchBooksPage } from './SearchBookPage/SearchBooksPage';

function App() {
  return (
    <div>
    <Navbar />
    <ExploreTopBook/>
   {/* <HomePage/>*/}
    <SearchBooksPage/>
    <Carousel/>
    <Heros/>
    </div>
  );
}

export default App;
