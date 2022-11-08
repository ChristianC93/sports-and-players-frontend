function Sport({ sports }) {

    const sportsList = sports.map((sport) => <li key={sport.id}>{sport.name}</li> )

    return (
        <div>
            <h3>Sport List</h3>
            <ul>
                {sportsList}
            </ul>
        </div>
    )
}

export default Sport