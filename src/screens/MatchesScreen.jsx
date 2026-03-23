import "./MatchesScreen.css"
import { useState } from "react"
import { matches } from "../data/homepagedata"

const MatchRow = ({ name, major, minor, compatibility, tags, color, online }) => {
  const [connected, setConnected] = useState(false)
  const initials = name.split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2)

  return (
    <div className="match-row">
      <div className="match-row-avatar-wrap">
        <div className="match-row-avatar" style={{ background: color }}>
          {initials}
        </div>
        {online && <div className="match-online-dot" />}
      </div>
      <div className="match-row-info">
        <p className="match-row-name">{name}</p>
        <p className="match-row-course">{major} · {minor}</p>
        <div className="match-row-tags">
          {tags.slice(0, 2).map(tag => (
            <span key={tag} className="match-row-tag">{tag}</span>
          ))}
        </div>
      </div>
      <div className="match-row-right">
        <p className="match-row-pct">{compatibility}%</p>
        <button
          className={connected ? "match-row-btn connected" : "match-row-btn"}
          onClick={() => setConnected(!connected)}
        >
          {connected ? "Connected" : "Connect"}
        </button>
      </div>
    </div>
  )
}

const MatchesScreen = () => {
  const [activeFilter, setActiveFilter] = useState("All")
  const filters = ["All", "Study Partners", "Social", "Projects"]

  const filteredMatches = activeFilter === "All"
    ? matches
    : matches.filter(match => match.category === activeFilter)

  return (
    <div className="matches-screen">
      <div className="matches-header">
        <div className="matches-header-top">
          <h1 className="matches-title">Your Matches</h1>
          <span className="matches-filter-btn">Filter</span>
        </div>
        <p className="matches-sub">{filteredMatches.length} students matched to you</p>
        <div className="matches-filters">
          {filters.map(filter => (
            <span
              key={filter}
              className={activeFilter === filter ? "filter-pill active" : "filter-pill"}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </span>
          ))}
        </div>
      </div>

      <div className="matches-list">
        {filteredMatches.length > 0 ? (
          filteredMatches.map(match => (
            <MatchRow key={match.id} {...match} online={match.id % 2 === 0} />
          ))
        ) : (
          <div className="matches-empty">
            <p className="matches-empty-title">No matches here yet</p>
            <p className="matches-empty-sub">Try a different filter or complete your profile for better matches</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default MatchesScreen