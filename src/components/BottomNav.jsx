import "./BottomNav.css";

const BottomNav = ({active, onNavigate}) => {

    const tabs = [
        {id: "home", label: "Home", icon: "🏠"},
        {id: "matches", label: "Matches", icon: "🔗"},
        {id: "groups", label: "Groups", icon: "👥"},
        {id: "messages", label: "Messages", icon: "💬"},
        {id:"profile", label: "Profile", icon: "👤"},
    ]

    return (
        <div className="bottom-nav">
            {tabs.map(tab => (
                <div
                    key={tab.id}
                    className={tab.id === active ? "nav-item active" : "nav-item"}
                    onClick={() => onNavigate(tab.id)}
                >
                    <span className="nav-icon">{tab.icon}</span>
                    <span className="nav-label">{tab.label}</span>
                    {tab.id === active && <div className="nav-dot"/>}
                </div>
            ))}
        </div>

    )}
export default BottomNav;