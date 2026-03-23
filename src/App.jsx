import { useState } from "react"
import LoginScreen from "./screens/LoginScreen"
import SignUpScreen from "./screens/SignUpScreen"
import HomeScreen from "./screens/HomeScreen"
import MatchesScreen from "./screens/MatchesScreen"
import ProfileScreen from "./screens/ProfileScreen"
import GroupsScreen from "./screens/GroupsScreen"
import MessagesScreen from "./screens/MessagesScreen"
import BottomNav from "./components/BottomNav"

const App = () => {
  const [userName, setUserName] = useState("")
  const [activeTab, setActiveTab] = useState("home")
  const [screen, setScreen] = useState("signup")

  // Not logged in yet
  if (userName === "") {
    if (screen === "signup") {
      return (
        <SignUpScreen
          onSignUp={setUserName}
          onGoToSignIn={() => setScreen("signin")}
        />
      )
    }
    if (screen === "signin") {
      return (
        <LoginScreen
          onLogin={setUserName}
          onGoToSignUp={() => setScreen("signup")}
        />
      )
    }
  }

  const placeholder = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontSize: "20px",
    fontWeight: "700",
    color: "#6C63FF",
    background: "#F5F4FF",
  }

  const renderScreen = () => {
    if (activeTab === "home")     return <HomeScreen name={userName} />
    if (activeTab === "matches")  return <MatchesScreen />
    if (activeTab === "groups")   return <GroupsScreen />
    if (activeTab === "messages") return <MessagesScreen />
    if (activeTab === "profile")  return <ProfileScreen name={userName} />
  }

  return (
    <div className="app-shell">
      {renderScreen()}
      <BottomNav active={activeTab} onNavigate={setActiveTab} />
    </div>
  )
}

export default App;
