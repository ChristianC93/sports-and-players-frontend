function PlayerInfo({ athlete }) {
    
    return (
        <div key={ athlete.name }>
            <h4>{ athlete.name }</h4>
            <p>Age: { athlete.age }</p>
            <p>Sport: {athlete.sport ? athlete.sport.name : "nill"} </p>
            <p>{ athlete.active ? "Active" : "Retired" }</p>
        </div>
    )
}

export default PlayerInfo;