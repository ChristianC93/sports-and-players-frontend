import { Link } from 'react-router-dom';

function SportInfo({ sport, deleteSport }) {
    function handleDeleteClick() {
        fetch(`http://localhost:9292/sports/${sport.id}`, {
            method:"DELETE",
        })
        .then((r) => r.json())
        .then((data) => deleteSport(data))
    }

    const numberOfPlayers = sport.players?.length > 0 ? sport.players.length : "None"
    return (
        <div key={sport.id}>
            <h2>{sport.name}</h2>
            <div>
                <p>Athletes: { numberOfPlayers }</p>
            </div>
            <p><Link to={`/sports/${ sport.id }/edit`}>Edit Sport Name</Link></p>
            <button onClick={ handleDeleteClick }>Delete</button>
        </div>
    )
}

export default SportInfo;