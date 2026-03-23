import "./MatchesScreen.css";
import { matches } from "../data/homepagedata";
import MatchCard from "../components/MatchCard";

const MatchesScreen = () => {

  return (
    <div className="matches-screen">

      {/* Header */}
      <div className="matches-header">
        <h1 className="matches-title">Your Matches</h1>
        <p className="matches-sub">{matches.length} students matched to you!</p>
      </div>

      {/* Match list */}
      <div className="matches-list">
        {matches.map(match => (
          <MatchCard key={match.id} {...match} />
        ))}
      </div>

    </div>
  )
}

export default MatchesScreen

