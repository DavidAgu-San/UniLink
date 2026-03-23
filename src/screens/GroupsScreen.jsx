import "./GroupsScreen.css";
import { groups } from "../data/homepagedata";
import { useState } from "react"

//Buildint the GroupCard component to display each group in the GroupsScreen
const GroupCard = ({ name, type, members, description, icon, joined }) => {

  const [isJoined, setIsJoined] = useState(joined)

  return (
    <div className="group-card">
      <div className="group-card-top">
        <div className="group-icon">{icon}</div>
        <div>
          <p className="group-name">{name}</p>
          <p className="group-meta">{type} · {members} members</p>
        </div>
      </div>
      <p className="group-desc">{description}</p>
      <button
        className={isJoined ? "group-btn joined" : "group-btn"}
        onClick={() => setIsJoined(!isJoined)}
      >
        {isJoined ? "Joined ✓" : "Join"}
      </button>
    </div>
  )
}

const GroupsScreen = () => {
    const joinedGroups = groups.filter(group => group.joined === true)
    const suggestedGroups = groups.filter(group => group.joined === false)


    return (
  <div className="groups-screen">

    {/* Header */}
    <div className="groups-header">
      <div>
        <h1 className="groups-title">Groups</h1>
        <p className="groups-sub">Find your community on campus</p>
      </div>
      <button className="groups-create-btn">+ Create</button>
    </div>

    {/* These will be the joined groups */}
    <h2 className="groups-section-title">Your Groups</h2>
    <div className="groups-list">
      {joinedGroups.map(group => (
        <GroupCard key={group.id} {...group} />
      ))}
    </div>

    {/* These will be the suggested groups */}
    <h2 className="groups-section-title">Suggested for You</h2>
    <div className="groups-list">
      {suggestedGroups.map(group => (
        <GroupCard key={group.id} {...group} />
      ))}
    </div>

    <div style={{ height: 80 }} />
  </div>
)

}

export default GroupsScreen;