import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Sport from './Sport';
import Player from './Player';
import SportForm from './SportForm';
import PlayerForm from './PlayerForm';


function App() {
  const [sports, setSports] = useState([]);
  const [athtetes, setAthletes] = useState([]);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/sports' element={<Sport/>} />
        <Route path='/sports/new' element={<SportForm/>} />
        <Route path='/players' element={<Player/>} />
        <Route path='/players/new' element={<PlayerForm/>} />
      </Routes>
    </div>
  );
}

export default App;
