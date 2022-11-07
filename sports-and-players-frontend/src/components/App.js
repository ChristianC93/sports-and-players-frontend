import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Sport from './Sport';
import Player from './Player';


function App() {
  const [sports, setSports] = useState([]);
  const [athtetes, setAthletes] = useState([]);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/sports' element={<Sport/>} />
        <Route path='/players' element={<Player/>} />
      </Routes>
    </div>
  );
}

export default App;
