function PlayerInfo({ players }) {
    console.log(players)
    const playerInfo = players.map(( player ) => {
        return (
            <div>
                <h4 key={ player.name }>{ player.name }</h4>
                <p>Age: { player.age }</p>
                <p>{ player.active ? "Active" : "Retired" }</p>
            </div>
        )
    })


    return (
        <div>
            {playerInfo}
        </div>
    )
}

export default PlayerInfo;