import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        navigate('/home');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  return (
    <div className="register-container">
      <header className="header">
        <h1>Welcome to GymStats</h1>
        <br/>
        <form onSubmit={handleLogin} className="form-container">
          <div className="form-group">
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Sign In" className="submit-button" />
          </div>
        </form>
      </header>
    </div>
  );
}

export default Login;
