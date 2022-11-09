function PlayerInfo({ sport }) {
    const athleteNames = sport.players.map( (player) => <h4 key={player.name}>{player.name}</h4>)
    console.log(athleteNames)
    return (
        <div>
            <ul>
                {athleteNames}
            </ul>
        </div>
    )
}

export default PlayerInfo;