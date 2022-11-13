import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function EditSport({ onEditSubmit }) {
    let { id } = useParams();

    const [updatedSport, setUpdatedSport] = useState({
        name: ""
    });

    useEffect(() => {
        fetch(`http://localhost:9292/sports/${id}`)
        .then((r) => r.json())
        .then((data) => setUpdatedSport(data))
      }, [ id ])

    function handleChange(e) {
        const name = e.target.name
        let value = e.target.value
        setUpdatedSport( {...updatedSport,
            [ name ]: value
        })
    }

    function submitEditSport(e) {
        e.preventDefault();
        onEditSubmit(updatedSport);
    }
    
    return (
        <div>
            <form onSubmit={ submitEditSport }>
                <label> Name:</label><br></br>
                <input type="text"  name="name" size="50" value={ updatedSport.name } onChange={ handleChange } ></input><br></br>
                <input type="submit" value="Edit Sport"></input>
            </form>
        </div>
    )
}

export default EditSport;