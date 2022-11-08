import SportInfo from "./SportInfo";

function Sport({ sports }) {
    console.log(sports)

    return (
        <div>
            <h2>List of Sports</h2>
            {sports.map((sport) => {
                return (
                <SportInfo key={sport.id} sport={sport} />
            )})}
        </div>
    )
}

export default Sport;