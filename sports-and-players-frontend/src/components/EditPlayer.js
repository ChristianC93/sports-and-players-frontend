import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function EditPlayer({ sports, onEditSubmit }) {
    const sportsOptions = sports.map((sport) => <option key={sport.id} value={sport.id}>{sport.name}</option>);

    let { id } = useParams();

    const [player, setPlayer] = useState({
        name:"",
        age:"",
        sport_id:"",
        active:""
    });

    useEffect(() => {
        fetch(`http://localhost:9292/players/${id}`)
        .then((r) => r.json())
        .then((data) => setPlayer(data))
      }, [ id ])

    function handleChange(e) {
        const name = e.target.name
        let value = e.target.value
        setPlayer( {...player,
            [ name ]: value
        })
    }

    function submitEditPlayer(e) {
        e.preventDefault()
        onEditSubmit(player)
    }
    
    return (
        <div>
            <form onSubmit={ submitEditPlayer}>
                <label> Name:</label><br></br>
                <input type="text"  name="name" size="50" value={ player.name } onChange={ handleChange } ></input><br></br>
                <label> Age:</label><br></br>
                <input type="text"  name="age" size="10" value={ player.age } onChange={ handleChange }></input><br></br>
                <label> Sport:</label><br></br>
                <select value={ player.sport_id } onChange={ handleChange }>
                    {sportsOptions}
                </select><br></br>
                <label>Active?:</label><br></br>
                <select name='active' value={ player.active } onChange={ handleChange }>
                    <option value={ true }>Yes</option>
                    <option value={ false }>No</option>
                </select><br></br>
                <input type="submit" value="Edit Player"></input>
            </form>
        </div>
    )
}

export default EditPlayer;