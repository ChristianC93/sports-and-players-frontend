import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function EditPlayer({ sports }) {
    const sportsOptions = sports.map((sport) => <option key={sport.id} value={sport.id}>{sport.name}</option>)
    let { id } = useParams();
    const [player, setPlayer] = useState({});

    useEffect(() => {
        fetch(`http://localhost:9292/players/${id}`)
        .then((r) => r.json())
        .then((data) => setPlayer(data))
      }, [])
    
    return (
        <div>
            <form>
                <label> Name:</label><br></br>
                <input type="text"  name="name" size="50" value={ player.name } ></input><br></br>
                <label> Age:</label><br></br>
                <input type="text"  name="age" size="50" value={ player.age }></input><br></br>
                <label> Sport:</label><br></br>
                <select value={ player.sport_id }>
                    {sportsOptions}
                </select><br></br>
                <label>Active?:</label><br></br>
                <select value={ player.active }>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select><br></br>
                <input type="submit" value="Edit Player"></input>
            </form>
        </div>
    )
}

export default EditPlayer;