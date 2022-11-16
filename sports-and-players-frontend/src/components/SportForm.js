import React, { useState } from "react";

function SportForm({ addSport }) {
    const [newSport, setNewSport] = useState({name: ""});

    function handleChange(e) {
        const name = e.target.name
        let value = e.target.value
        setNewSport( {[ name ]: value} )
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:9292/sports", {
            method:"POST",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify(newSport)
        })
        .then((r) => r.json())
        .then((data) => addSport(data))
        .then(() => setNewSport({ name:"" }))
    }


    return (
        <div>
            <h3>Add a Sport</h3>
            <form onSubmit={ handleSubmit }>
                <label> Name:</label><br></br>
                <input type="text" placeholder="Name..." name="name" size="50" value={newSport.name} onChange={ handleChange }></input><br></br>
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default SportForm;