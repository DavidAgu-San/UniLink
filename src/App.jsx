// Importing useState
import {useState} from "react";
// Pulling the LoginScreen and HomeScreen components
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
    // State to track if the user is logged in and their name
    const [userName, setUserName] = useState("");
    return (
      <div className="app-shell">
        {userName === "" ? (
          // Passing the setUserName straigh to the onLogin
          <LoginScreen onLogin={setUserName} />
        ) : (
          <HomeScreen name={userName} />
        )}
      </div>

    )}

export default App;
