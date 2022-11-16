import { useState } from "react";
function PlayerForm( { sports }) {
    const sportsOptions = sports.map((sport) => <option key={sport.id} value={sport.id}>{sport.name}</option>)

    const [athlete, setAthlete] = useState({
        name:"",
        age:"",
        sport_id: 6,
        active: true
    })

    function handleChange(e) {
        const name = e.target.name
        let value = e.target.value
        setAthlete({
            ...athlete,
            [name]: value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:9292/players", {
            method:"POST",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify(athlete)
        })
        .then((r) => r.json())
        .then((data) => console.log(data))
        .then(() => setAthlete({
            name:"",
            age:"",
            sport_id: 6,
            active: true
        }))
    }

    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <label> Name:</label><br></br>
                <input type="text" placeholder="name..." name="name" size="50" value={ athlete.name } onChange={ handleChange } ></input><br></br>
                <label> Age:</label><br></br>
                <input type="text" placeholder="Age..." name="age" size="50" value={ athlete.age } onChange={ handleChange } ></input><br></br>
                <label> Sport:</label><br></br>
                <select name="sport_id" value={ athlete.sport_id } onChange={ handleChange } >
                    {sportsOptions}
                </select><br></br>
                <label>Active?</label><br></br>
                <select name="active" value={ athlete.active } onChange={ handleChange } >
                    <option value={ true }>Yes</option>
                    <option value={ false }>No</option>
                </select><br></br>
                <input type="submit" value="Add Athlete"></input>
            </form>
        </div>
    )
}

export default PlayerForm;