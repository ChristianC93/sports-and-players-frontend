import { Link } from 'react-router-dom'
function PlayerInfo({ players }) {
    console.log(players)
    const playerInfo = players.map(( player ) => {
        return (
            <div>
                <h4>{ player.name }</h4>
                <p>Age: { player.age }</p>
                <p>{ player.active ? "Active" : "Retired" }</p>
                <p><Link to={`http://localhost:9292/players/${ player.id }/edit`}>Edit</Link></p> <button>Delete</button>
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