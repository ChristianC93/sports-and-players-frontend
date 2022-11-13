function PlayerInfo({ players }) {
    const playerInfo = players.map(( player ) => {
        return (
            <div key={ player.name }>
                <h4 key={ player.name }>{ player.name }</h4>
                <p key={ player.age }>Age: { player.age }</p>
                <p key={ player.active }>{ player.active ? "Active" : "Retired" }</p>
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