import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Sport from './Sport';
import Player from './Player';
import SportForm from './SportForm';
import PlayerForm from './PlayerForm';
import EditPlayer from './EditPlayer';


function App() {
  const [sports, setSports] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/sports")
    .then((r) => r.json())
    .then((data) => setSports(data))
  }, [])

  // console.log(sports)

  function addSport(newSport) {
    setSports( [...sports, newSport ] )
  }

  function deleteSport(clickedSport) {
    setSports([...sports].filter((sport) => sport.id !== clickedSport.id))
  }

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/sports' element={<Sport sports={ sports } deleteSport={ deleteSport }/>} />
        <Route path='/sports/new' element={<SportForm addSport={ addSport }/>} />
        <Route path='/players' element={<Player sports={ sports } />} />
        <Route path='/players/new' element={<PlayerForm sports={ sports }/>} />
        <Route path='/players/:id/edit' element={<EditPlayer sports={ sports }/>} />
      </Routes>
    </div>
  );
}

export default App;
