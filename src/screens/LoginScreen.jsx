// Import the CSS file for Login Screen
import "./LoginScreen.css";
//Import UseState from React
import {useState} from "react";

const LoginScreen = ({ onLogin, onGoToSignUp }) => {
    // State for the input value
    const [inputValue, setInputValue] = useState("");
    const handleLogin = (e) => {
        e.preventDefault();
        if (inputValue.trim()==="") return
        onLogin(inputValue);
    }
    return (
  <form className="login-screen" onSubmit={handleLogin}>

    <div className="login-logo-row">
      <img src="/logo.png" className="login-logo-img" alt="UniLink" />
      <span className="login-logo-text">UNILINK</span>
    </div>

    <div className="login-divider" />

    <p className="login-eyebrow">Smithite Connecting Platform</p>

    <h1 className="login-headline">
      Where<br />connections<br /><em>begin.</em>
    </h1>

    <p className="login-subtitle">
      Built for every student. 
      Matched by who you are — not how you look.
    </p>

    <div className="login-spacer" />

    <div className="login-avatars-row">
      <div className="login-avatars">
        <div className="login-av" style={{ background: "#5B5BCC" }}>AJ</div>
        <div className="login-av" style={{ background: "#2E7D5E" }}>PR</div>
        <div className="login-av" style={{ background: "#8B4A2E" }}>KO</div>
        <div className="login-av" style={{ background: "#2E5A8B" }}>MT</div>
      </div>
      <span className="login-av-count">1,500+ students connected</span>
    </div>

    <div className="login-pillars">
      <div className="login-pillar">
        <div className="login-pillar-line" />
        <span className="login-pillar-text">Verified student only</span>
      </div>
      <div className="login-pillar">
        <div className="login-pillar-line" />
        <span className="login-pillar-text">Matched on goals &amp; personality</span>
      </div>
      <div className="login-pillar">
        <div className="login-pillar-line" />
        <span className="login-pillar-text">Designed for neurodiversity</span>
      </div>
    </div>

    <p className="login-label">What's your name?</p>
    <input
      className="login-input"
      type="text"
      placeholder="e.g. Jonathan Kuminga..."
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />

    <button className="login-btn" type="submit">
      <span>Log in</span>
      <span>→</span>
    </button>
    
    <p
        style={{
        textAlign: "center",
        color: "#3A3A55",
        fontSize: "13px",
        marginBottom: "32px",
        cursor: "pointer"
    }}
    >
    Don't have an account?{" "}
    <span
        onClick={onGoToSignUp}
        style={{ color: "#8B8BFF", fontWeight: "600" }}
    >
        Sign up
    </span>
    </p>

  </form>
)
  
}

export default LoginScreen;