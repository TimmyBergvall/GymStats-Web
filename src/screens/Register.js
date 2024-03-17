import React, { useState } from "react";
import "../App.css";
import { useNavigate } from 'react-router-dom';
import {  firestore } from "../database/Firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();


function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [startWeight, setStartWeight] = useState('');
  const [goalWeight, setGoalWeight] = useState('');
  const [length, setLength] = useState('');
  const [weeklyGoal, setWeeklyGoal] = useState('');


  const navigate = useNavigate();


  const functionRegister = (e) => {
    e.preventDefault();
    if (email === '') {
      alert('Please enter an email');
      return;
    }

    if (reg.test(email) === false) {
      alert('Please enter a valid email');
      return;
    }

    if (password.length < 6) {
      alert('Password must be at least 6 characters');
      return;
    }

    if (password !== passwordConfirm) {
      alert('Passwords do not match');
      return;
    }

    if (age === '') {
      alert('Please enter your age');
      return;
    }

    if (gender === '') {
      alert('Please enter your gender');
      return;
    }

    if (startWeight === '') {
      alert('Please enter your current weight');
      return;
    }

    if (goalWeight === '') {
      alert('Please enter your goal weight');
      return;
    }

    if (length === '') {
      alert('Please enter your length');
      return;
    }

    if (weeklyGoal === '') {
      alert('Please enter your weekly goal');
      return;
    }

    try {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          createDetails();
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            alert('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            alert('That email address is invalid!');
          }
          console.error(error);
        });
    } catch (error) {
      alert(error);
    }
  };

  const createDetails = async () => {
    const user = auth.currentUser;
    const db = firestore;
    const userRef = db.collection('Users').doc(user.uid);
    const detailsRef = userRef.collection('Details');


    try {
      const userDetails = {
        complete: true,
        gender: gender,
        length: length,
        age: age,
        startWeight: startWeight,
        weeklyGoal: weeklyGoal,
        goalWeight: goalWeight,
      };

      // Set the user details document in the "Details" collection with merge: true
      await detailsRef.doc('userDetails').set(userDetails, {merge: true});

      console.log('Details created/updated successfully!');

      addWeight();

      navigate('/home');
    } catch (error) {
      console.log('Error creating/updating details:', error);
    }
  };

  const addWeight = async () => {
    const user = auth.currentUser;
    const db = firestore;
    const userRef = db.collection('Users').doc(user.uid);
    const weightsRef = userRef.collection('Weights');

    try {
      // Create a new weight document with the current date as the document ID
      const currentDate = new Date().toISOString().split('T')[0]; // Get the current date in the format 'YYYY-MM-DD'
      const weightData = {
        weight: startWeight,
        date: firestore.Timestamp.fromDate(new Date()),
      };

      // Add the weight document to the Weights subcollection with the current date as the document ID
      await weightsRef.doc(currentDate).set(weightData);

      console.log('Weight added successfully!');
    } catch (error) {
      console.log('Error ad ding weight:', error);
    }
  };


  return (
    <div className="regiser-container">
      <header className="header">
        <h1>Welcome to GymStats</h1>
      </header>
      <div className="form-container">
        <form onSubmit={functionRegister}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Start Weight"
              value={startWeight}
              onChange={(e) => setStartWeight(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Goal Weight"
              value={goalWeight}
              onChange={(e) => setGoalWeight(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Length"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Weekly Goal"
              value={weeklyGoal}
              onChange={(e) => setWeeklyGoal(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
            <br/>
            <br/>
            <br/>
            <br/>
    </div>
    
  );
}

export default Register;