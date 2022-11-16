import PlayerInfo from "./PlayerInfo";
import { useEffect, useState } from 'react'

function Player() {
    const [athletes, setAthletes] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9292/players")
        .then((r) => r.json())
        .then((data) => setAthletes(data))
      }, [])
    return (
        <div>
            <h2>List of Athletes</h2>
            {athletes.map((athlete) => {
                return (
                    <PlayerInfo key={athlete.id} athlete={athlete} />
                )
            })}
        </div>
    )
}

export default Player;