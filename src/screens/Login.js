import React, { useState } from "react";
import { TextInput } from "react-native-web";
import "../App.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    console.log("Email:", email, "Password:", password);
    // You can replace the console.log with your authentication logic
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to GymStats</h1>
        <form onSubmit={handleLogin}>
          <label>
          <br />
            Email:
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <br />
          <input type="submit" value="Sign In" />
        </form>
      </header>
    </div>
  );
}

export default Login;