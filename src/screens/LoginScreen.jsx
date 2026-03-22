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
        <form onSubmit={handleLogin}>
            <h1>UniLink</h1>
            <p>Your connections are on the other side😉...</p>
            <input
                type="text"
                placeholder="Name?"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit">Login</button>
        </form>
    );
}

export default LoginScreen;