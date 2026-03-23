import "./ProfileScreen.css"
import { useState } from "react"
import { userProfile, matches } from "../data/homepagedata"

const allInterests = [
  { label: "Anime",        style: "purple" },
  { label: "Data Science", style: "green"  },
  { label: "Basketball",   style: "orange" },
  { label: "Music",        style: "pink"   },
  { label: "Study Groups", style: "blue"   },
  { label: "Gaming",       style: "purple" },
  { label: "Coding",       style: "green"  },
  { label: "Photography",  style: "orange" },
  { label: "Reading",      style: "blue"   },
  { label: "Sports",       style: "orange" },
  { label: "Art",          style: "pink"   },
  { label: "Travel",       style: "purple" },
]

const ProfileScreen = ({ name }) => {
  const initials = name
    .split(" ")
    .map(word => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)

  const [isEditing, setIsEditing]   = useState(false)
  const [bio, setBio]               = useState(userProfile.bio)
  const [course, setCourse]         = useState(userProfile.course)
  const [addingInterest, setAddingInterest] = useState(false)

  const [selectedInterests, setSelectedInterests] = useState(
    userProfile.interests.map(i => i.label)
  )

  // Personality as independent sliders
  const [personality, setPersonality] = useState([
    { id: 1, label: "Communication", value: 70  },
    { id: 2, label: "Study style",   value: 85  },
    { id: 3, label: "Social energy", value: 45  },
    { id: 4, label: "Availability",  value: 60  },
  ])

  const getLabel = (value) => {
    if (value >= 75) return "High"
    if (value >= 50) return "Balanced"
    if (value >= 35) return "Moderate"
    return "Low"
  }

  const updatePersonality = (id, newValue) => {
    setPersonality(prev =>
      prev.map(trait =>
        trait.id === id ? { ...trait, value: Number(newValue) } : trait
      )
    )
  }

  const toggleInterest = (label) => {
    setSelectedInterests(prev =>
      prev.includes(label)
        ? prev.filter(i => i !== label)
        : [...prev, label]
    )
  }

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

        {isEditing ? (
          <input
            className="profile-input"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />
        ) : (
          <p className="profile-course">{course} · {userProfile.year}</p>
        )}

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
        <div className="profile-section-header">
          <h3 className="profile-section-title">Interests</h3>
          <span
            className="profile-add-btn"
            onClick={() => setAddingInterest(!addingInterest)}
          >
            {addingInterest ? "Done" : "+ Add"}
          </span>
        </div>

        {addingInterest && (
          <div className="interest-picker">
            <p className="interest-picker-hint">
              Tap to add or remove interests
            </p>
            <div className="interests-wrap">
              {allInterests.map(interest => (
                <span
                  key={interest.label}
                  className={
                    selectedInterests.includes(interest.label)
                      ? `interest-tag it-${interest.style} selected-interest`
                      : `interest-tag it-${interest.style} unselected-interest`
                  }
                  onClick={() => toggleInterest(interest.label)}
                >
                  {selectedInterests.includes(interest.label) ? "✓ " : "+ "}
                  {interest.label}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="interests-wrap" style={{ marginTop: addingInterest ? 12 : 0 }}>
          {selectedInterests.map(label => {
            const interest = allInterests.find(i => i.label === label)
            return (
              <span
                key={label}
                className={`interest-tag it-${interest?.style || "purple"}`}
              >
                {label}
              </span>
            )
          })}
          {selectedInterests.length === 0 && (
            <p style={{ fontSize: "13px", color: "#AAA" }}>
              No interests yet — tap "+ Add" to get started
            </p>
          )}
        </div>
      </div>

      {/* Personality — independent sliders */}
      <div className="profile-section">
        <div className="profile-section-header">
          <h3 className="profile-section-title">Personality</h3>
          {isEditing && (
            <span className="personality-edit-hint">Drag to adjust</span>
          )}
        </div>
        <div className="personality-card">
          {personality.map(trait => (
            <div key={trait.id} className="personality-row">
              <span className="p-label">{trait.label}</span>
              <div className="p-bar-wrap">
                {isEditing ? (
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="1"
                    value={trait.value}
                    onChange={(e) => updatePersonality(trait.id, e.target.value)}
                    className="personality-slider"
                  />
                ) : (
                  <div className="p-bar-track">
                    <div
                      className="p-bar"
                      style={{
                        width: `${trait.value}%`,
                        transition: "width 0.4s ease"
                      }}
                    />
                  </div>
                )}
              </div>
              <span className="p-value">{getLabel(trait.value)}</span>
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
              <div
                className="connection-avatar"
                style={{ background: match.color }}
              >
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