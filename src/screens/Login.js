import React, { useState } from "react";
import "../App.css";
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";
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