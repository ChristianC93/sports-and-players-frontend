function SportInfo({ sport, deleteSport }) {
    function handleDeleteClick() {
        fetch(`http://localhost:9292/sports/${sport.id}`, {
            method:"DELETE",
        })
        .then((r) => r.json())
        .then((data) => deleteSport(data))
    }
    return (
        <div>
            <h2>{sport.name}</h2>
            <div>
                <p>Number of Athletes: { sport.players.length }</p>
            </div>
            <button onClick={ handleDeleteClick }>Delete</button>
        </div>
    )
}

export default SportInfo;