import "./GroupsScreen.css"
import { groups } from "../data/homepagedata"
import { useState } from "react"

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
  const [allGroups, setAllGroups] = useState(groups)
  const [isCreating, setIsCreating] = useState(false)
  const [form, setForm] = useState({
    name: "",
    type: "Academic",
    description: "",
    icon: "📚",
  })
  const [errors, setErrors] = useState({})

  const joinedGroups    = allGroups.filter(g => g.joined === true)
  const suggestedGroups = allGroups.filter(g => g.joined === false)

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }))
    setErrors(prev => ({ ...prev, [field]: "" }))
  }

  const handleCreate = (e) => {
    e.preventDefault()
    const newErrors = {}

    if (!form.name.trim())
      newErrors.name = "Please enter a group name"
    if (!form.description.trim())
      newErrors.description = "Please enter a description"

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    const newGroup = {
      id: allGroups.length + 1,
      name: form.name,
      type: form.type,
      members: 1,
      description: form.description,
      icon: form.icon,
      joined: true,
    }

    setAllGroups(prev => [newGroup, ...prev])
    setForm({ name: "", type: "Academic", description: "", icon: "📚" })
    setIsCreating(false)
  }

  const iconOptions = ["📚", "🎌", "🧠", "🌍", "🎸", "🏀", "💻", "🎨", "🎭", "🔬"]

  return (
    <div className="groups-screen">

      <div className="groups-header">
        <div>
          <h1 className="groups-title">Groups</h1>
          <p className="groups-sub">Find your community on campus</p>
        </div>
        <button
          className="groups-create-btn"
          onClick={() => setIsCreating(!isCreating)}
        >
          {isCreating ? "✕ Cancel" : "+ Create"}
        </button>
      </div>

      {/* Create Group Form */}
      {isCreating && (
        <form className="create-group-form" onSubmit={handleCreate}>
          <h2 className="create-group-title">New Group</h2>

          {/* Icon picker */}
          <p className="create-group-label">Pick an icon</p>
          <div className="icon-picker">
            {iconOptions.map(icon => (
              <span
                key={icon}
                className={form.icon === icon ? "icon-option selected" : "icon-option"}
                onClick={() => handleChange("icon", icon)}
              >
                {icon}
              </span>
            ))}
          </div>

          {/* Group name */}
          <p className="create-group-label">Group name</p>
          <input
            className={errors.name ? "create-group-input error" : "create-group-input"}
            type="text"
            placeholder="e.g. Late Night Coders"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          {errors.name && <p className="create-group-error">{errors.name}</p>}

          {/* Group type */}
          <p className="create-group-label">Type</p>
          <div className="type-picker">
            {["Academic", "Social", "Sports", "Creative"].map(type => (
              <span
                key={type}
                className={form.type === type ? "type-option selected" : "type-option"}
                onClick={() => handleChange("type", type)}
              >
                {type}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="create-group-label">Description</p>
          <textarea
            className={errors.description ? "create-group-input error" : "create-group-input"}
            placeholder="What is this group about?"
            value={form.description}
            onChange={(e) => handleChange("description", e.target.value)}
            rows={3}
          />
          {errors.description && <p className="create-group-error">{errors.description}</p>}

          <button className="create-group-submit" type="submit">
            Create Group →
          </button>
        </form>
      )}

      {/* Your groups */}
      <h2 className="groups-section-title">Your Groups</h2>
      <div className="groups-list">
        {joinedGroups.map(group => (
          <GroupCard key={group.id} {...group} />
        ))}
      </div>

      {/* Suggested */}
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

export default GroupsScreen
