import "./ProfileScreen.css"
import { useState } from "react"
import { userProfile, matches } from "../data/homepagedata"

const ProfileScreen = ({ name }) => {

  const initials = name
    .split(" ")
    .map(word => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)

  // Edit mode state
  const [isEditing, setIsEditing] = useState(false)

  // Editable fields — start with data from userProfile
  const [bio, setBio]       = useState(userProfile.bio)
  const [course, setCourse] = useState(userProfile.course)
  const [year, setYear]     = useState(userProfile.year)

  return (
    <div className="profile-screen">

      {/* Header */}
      <div className="profile-header">
        <h1 className="profile-title">My Profile</h1>
        <button
          className="profile-edit-btn"
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? "Save ✓" : "Edit Profile"}
        </button>
      </div>

      {/* Avatar + info */}
      <div className="profile-top">
        <div className="profile-avatar">{initials}</div>
        <h2 className="profile-name">{name}</h2>

        {/* Course — editable */}
        {isEditing ? (
          <input
            className="profile-input"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />
        ) : (
          <p className="profile-course">{course} · {year}</p>
        )}

        {/* Bio — editable */}
        {isEditing ? (
          <textarea
            className="profile-input"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            rows={3}
          />
        ) : (
          <p className="profile-bio">"{bio}"</p>
        )}
      </div>

      {/* Stats */}
      <div className="profile-stats">
        <div className="stat">
          <span className="stat-num">{userProfile.connections}</span>
          <span className="stat-label">Connections</span>
        </div>
        <div className="stat">
          <span className="stat-num">{userProfile.groups}</span>
          <span className="stat-label">Groups</span>
        </div>
        <div className="stat">
          <span className="stat-num">{userProfile.topMatch}%</span>
          <span className="stat-label">Top Match</span>
        </div>
      </div>

      {/* Interests */}
      <div className="profile-section">
        <h3 className="profile-section-title">Interests</h3>
        <div className="interests-wrap">
          {userProfile.interests.map(interest => (
            <span
              key={interest.id}
              className={`interest-tag it-${interest.style}`}
            >
              {interest.label}
            </span>
          ))}
        </div>
      </div>

      {/* Personality */}
      <div className="profile-section">
        <h3 className="profile-section-title">Personality</h3>
        <div className="personality-card">
          {userProfile.personality.map(trait => (
            <div key={trait.id} className="personality-row">
              <span className="p-label">{trait.label}</span>
              <div className="p-bar-wrap">
                <div className="p-bar" style={{ width: trait.width }} />
              </div>
              <span className="p-value">{trait.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Connections */}
      <div className="profile-section">
        <h3 className="profile-section-title">My Connections</h3>
        <div className="connections-list">
          {matches.map(match => (
            <div key={match.id} className="connection-card">
              <div className="connection-avatar">
                {match.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
              </div>
              <div className="connection-info">
                <p className="connection-name">{match.name}</p>
                <p className="connection-course">{match.major} · {match.minor}</p>
              </div>
              <p className="connection-pct">{match.compatibility}% match</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ height: 80 }} />
    </div>
  )
}

export default ProfileScreen