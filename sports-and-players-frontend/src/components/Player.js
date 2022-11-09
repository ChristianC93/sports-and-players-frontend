import PlayerInfo from "./PlayerInfo";

function Player({ sports }) {

    return (
        <div>
            <h2>List of Athletes</h2>
            {sports.map((sport) => {
                return (
                    <PlayerInfo key={sport.id} sport={sport} />
                )
            })}
        </div>
    )
}

export default Player;