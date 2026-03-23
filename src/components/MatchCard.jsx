// Importing the css file for the MatchCard component
import "./MatchCard.css";
import { useState } from "react";

// Using Spread Operator to pass props to the MatchCard component

const MatchCard = ({ name, major, minor, compatibility, tags }) => {

    //Retrieving the first two initials of the name
    const initials = name.split(" ").map(word => word[0]).join("").toUpperCase().slice(0, 2);
    const [connected, setConnected] = useState(false);
    return (
        <div className="matchcard-body">
            {/*Displaying the initials in a circle and the rest of the info*/}

            <div className="matchcard-icon">{initials}</div>
            <h3 className="matchcard-name">{name}</h3>
            <p className="matchcard-course">{major} · {minor}</p>
            <p className="matchcard-pct">{compatibility}%</p>
            <div className="matchcard-tags">
                {tags.map((tag, index) => (
                    <span key={tag} className="matchcard-tag">{tag}</span>
                ))}
            </div>
            <button className={connected ? "matchcard-btn connected" : "matchcard-btn"}
             onClick={() => setConnected(!connected)}>
                {connected ? "Connected✅" : "Connect"}
            </button>
        </div>
    )
}

export default MatchCard;