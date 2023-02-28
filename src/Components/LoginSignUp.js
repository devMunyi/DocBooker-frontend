import React, { useState } from 'react';
import PopUp from './PopUp';
import './css/login.css';

const LoginSignUp = () => {
  const loginUserUrl = 'http://localhost:3000/api/users';
  const createUserUrl = 'http://localhost:3000//api/users';
  const [username, setUsername] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleLogin = () => {
    if (username.trim().length < 1) return false;
    fetch(`${loginUserUrl}/${username}`)
      .then((response) => {
        console.log(response);
        if (response.ok) {
          // User exists, redirect to landing page
          window.location.href = '/';
        } else if (response.status === 404) {
          // User does not exist, show popup to confirm creating new user
          setShowPopup(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    return true;
  };

  const handleCreateUser = () => {
    // Make API call to create new user
    // Redirect to landing page
    fetch(createUserUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username }),
    })
      .then((response) => {
        if (response.ok) {
          // New user created, redirect to landing page
          window.location.href = '/landing';
        } else {
          // Error creating new user
          console.log(response.statusText);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const cancelPopUpAction = () => {
    setShowPopup(false);
  };

  return (
    <div className="login-container">
      <h2>Login or Signup</h2>
      <div className="input-container">
        Username:
        <input className="username-input" type="text" value={username} onChange={handleUsernameChange} />
      </div>
      <button className="login-btn" type="button" onClick={handleLogin}>Login/Signup</button>
      {showPopup && (
        <PopUp
          className="popup"
          message={`The user "${username}" was not found. Do you want to create a new user?`}
          confirmAction={handleCreateUser}
          cancelAction={cancelPopUpAction}
        />
      )}
    </div>
  );
};

export default LoginSignUp;
