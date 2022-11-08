function SportInfo({ sport }) {
    return (
        <div>
            <h2>{sport.name}</h2>
            <div>
                <p>Number of Athletes: { sport.players.length }</p>
            </div>
        </div>
    )
}

export default SportInfo;