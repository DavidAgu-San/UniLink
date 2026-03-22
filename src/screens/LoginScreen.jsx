// Import the CSS file for Login Screen
import "./LoginScreen.css";
//Import UseState from React
import {useState} from "react";

const LoginScreen = ({ onLogin }) => {
    // State for the input value
    const [inputValue, setInputValue] = useState("");
    const handleLogin = (e) => {
        e.preventDefault();
        if (inputValue.trim()==="") return
        onLogin(inputValue);
    }
    return (
        <form onSubmit={handleLogin} className="login-screen">
            <h1 className="login-logo">UniLink</h1>
            <p className="login-subtitle">Your connections are on the other side😉...</p>
            <p className="login-label">Please enter your name</p>
            <input
                type="text"
                placeholder="Name?"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            className="login-input"/>
            <button type="submit" className="login-btn">Login</button>
            <p className="login-note">By logging in, you agree to our Terms of Service and Privacy Policy.</p>
        </form>
    );
}

export default LoginScreen;