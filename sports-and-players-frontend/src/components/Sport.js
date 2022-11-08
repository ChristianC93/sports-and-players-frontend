function Sport({ sports }) {

    const sportsList = sports.map((sport) => <h2 key={sport.id}>{sport.name}</h2> )

    return (
        <div>
            <h3>Sport List</h3>
            {sportsList}
        </div>
    )
}

export default Sport;