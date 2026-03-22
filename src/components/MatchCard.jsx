// Using Spread Operator to pass props to the MatchCard component

const MatchCard = ({ name, major, minor, compatibility, tags }) => {

    //Retrieving the first two initials of the name
    const initials = name.split(" ").map(word => word[0]).join("").toUpperCase().slice(0, 2);
    return (
        <div>
            {/*Displaying the initials in a circle and the rest of the info*/}

            <div>{initials}</div>
            <h3>{name}</h3>
            <p>{major} Major</p>
            <p>{minor} Minor</p>
            <p>Compatibility: {compatibility}%</p>
            <div>
                {tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                ))}
            </div>
        </div>
    )
}

export default MatchCard;