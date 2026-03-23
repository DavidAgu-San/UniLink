// Importing the css file for the MatchCard component
import "./MatchCard.css";
import { useState } from "react";

// Using Spread Operator to pass props to the MatchCard component

const MatchCard = ({ name, major, minor, compatibility, tags, color }) => {

    //Retrieving the first two initials of the name
    const initials = name.split(" ").map(word => word[0]).join("").toUpperCase().slice(0, 2);
    const [connected, setConnected] = useState(false);
    return (
        <div className="matchcard-body">
            {/* Coloured top accent using the card's unique colour */}
            <div style={{
                height: "4px",
                background: color,
                margin: "-16px -16px 12px -16px",
                borderRadius: "0"
            }} />

            <div className="matchcard-top">
                <div className="matchcard-icon" style={{ background: color }}>
                {initials}
                </div>
                <div className="matchcard-info">
                <h3 className="matchcard-name">{name}</h3>
                <p className="matchcard-course">{major} · {minor}</p>
                <p className="matchcard-pct">{compatibility}% match</p>
            </div>
            </div>
            <div className="matchcard-tags">
                {tags.map(tag => (
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