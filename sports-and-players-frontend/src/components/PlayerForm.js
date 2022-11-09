function PlayerForm( { sports }) {
    const sportsOptions = sports.map((sport) => <option key={sport.id} value={sport.id}>{sport.name}</option>)
    return (
        <div>
            <form>
                <label> Name:</label><br></br>
                <input type="text" placeholder="name..." name="name" size="50" ></input><br></br>
                <label> Age:</label><br></br>
                <input type="text" placeholder="Age..." name="age" size="50"></input><br></br>
                <label> Sport:</label><br></br>
                <select>
                    {sportsOptions}
                </select><br></br>
                <label>Active?:</label><br></br>
                <input type="submit" value="Add to Backlog"></input>
            </form>
        </div>
    )
}

export default PlayerForm;