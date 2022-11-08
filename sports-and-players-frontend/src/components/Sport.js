import SportInfo from "./SportInfo";

function Sport({ sports, deleteSport }) {
    
    return (
        <div>
            <h2>List of Sports</h2>
            {sports.map((sport) => {
                return (
                <SportInfo key={sport.id} sport={sport} deleteSport={deleteSport} />
            )})}
        </div>
    )
}

export default Sport;