// Importing useState
import {useState} from "react";
// Pulling the Screen Components
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import BottomNav from "./components/BottomNav";
import MatchesScreen from "./screens/MatchesScreen"
import ProfileScreen from "./screens/ProfileScreen"; 
import GroupsScreen from "./screens/GroupsScreen";
import MessagesScreen from "./screens/MessagesScreen";

const App = () => {
    // State to track if the user is logged in and their name
    const [userName, setUserName] = useState("");
    const [activeTab, setActiveTab] = useState("home");

    //If not logged in, show the login screen
    if (userName === "") {
        return <LoginScreen onLogin={setUserName} />
    }

    //the placeholder style for the non-home screens
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

    //Showing the right screen depending on the active tab
    const renderScreen = () => {
      if (activeTab === "home") {
        return <HomeScreen name={userName} />
      }
      if (activeTab === "matches") {
        return <MatchesScreen/>
      }
      if (activeTab === "groups") {
        return <GroupsScreen/>
      }
      if (activeTab === "messages") {
        return <MessagesScreen/>
      }
      if (activeTab === "profile") {
        return <ProfileScreen name={userName} />
      }
    }

    
    return (
      <div className="app-shell">
        {renderScreen()}
        <BottomNav active={activeTab} onNavigate={setActiveTab}/>
      </div>

    )}

export default App;
